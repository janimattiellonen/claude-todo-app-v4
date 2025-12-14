import { useEffect, useRef } from 'react'
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
  const activeTimersRef = useRef<Map<string, ReturnType<typeof setTimeout>>>(
    new Map()
  )

  useEffect(() => {
    const currentNotificationIds = new Set(notifications.map((n) => n.id))
    const activeTimers = activeTimersRef.current

    // Remove timers for notifications that no longer exist
    activeTimers.forEach((timer, id) => {
      if (!currentNotificationIds.has(id)) {
        clearTimeout(timer)
        activeTimers.delete(id)
      }
    })

    // Create timers only for new notifications with duration
    notifications.forEach((notification) => {
      if (notification.duration && !activeTimers.has(notification.id)) {
        const timer = setTimeout(() => {
          removeNotification(notification.id)
          activeTimers.delete(notification.id)
        }, notification.duration)
        activeTimers.set(notification.id, timer)
      }
    })

    return () => {
      activeTimers.forEach((timer) => clearTimeout(timer))
      activeTimers.clear()
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
