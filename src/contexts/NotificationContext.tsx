import { createContext, useState } from 'react'
import type { ReactNode } from 'react'
import type {
  Notification,
  CreateNotificationInput,
} from '../types/notification'
import { v4 as uuidv4 } from 'uuid'

type NotificationContextType = {
  notifications: Notification[]
  addNotification: (notification: CreateNotificationInput) => string
  removeNotification: (id: string) => void
}

// eslint-disable-next-line react-refresh/only-export-components
export const NotificationContext = createContext<
  NotificationContextType | undefined
>(undefined)

type NotificationProviderProps = {
  children: ReactNode
}

export function NotificationProvider({ children }: NotificationProviderProps) {
  const [notifications, setNotifications] = useState<Notification[]>([])

  const addNotification = (input: CreateNotificationInput): string => {
    const id = uuidv4()
    const notification: Notification = {
      id,
      ...input,
    }
    setNotifications((prev) => [...prev, notification])
    return id
  }

  const removeNotification = (id: string) => {
    setNotifications((prev) => prev.filter((n) => n.id !== id))
  }

  return (
    <NotificationContext.Provider
      value={{
        notifications,
        addNotification,
        removeNotification,
      }}
    >
      {children}
    </NotificationContext.Provider>
  )
}
