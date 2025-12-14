import { useEffect } from 'react'
import * as stylex from '@stylexjs/stylex'
import { useNotificationContext } from '../hooks/useNotificationContext'
import { Notification } from './Notification'

const styles = stylex.create({
  container: {
    position: 'fixed',
    top: '1rem',
    right: '1rem',
    zIndex: 1000,
    display: 'flex',
    flexDirection: 'column',
    gap: '0.75rem',
  },
})

export function NotificationContainer() {
  const { notifications, removeNotification } = useNotificationContext()

  useEffect(() => {
    const timers: ReturnType<typeof setTimeout>[] = []

    notifications.forEach((notification) => {
      if (notification.duration) {
        const timer = setTimeout(() => {
          removeNotification(notification.id)
        }, notification.duration)
        timers.push(timer)
      }
    })

    return () => {
      timers.forEach((timer) => clearTimeout(timer))
    }
  }, [notifications, removeNotification])

  return (
    <div {...stylex.props(styles.container)}>
      {notifications.map((notification) => (
        <Notification
          key={notification.id}
          notification={notification}
          onClose={() => removeNotification(notification.id)}
        />
      ))}
    </div>
  )
}
