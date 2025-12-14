/**
 * Notification Type Definitions
 */

export type NotificationType = 'success' | 'error' | 'info'

export type Notification = {
  id: string
  type: NotificationType
  message: string
  duration?: number // Auto-dismiss duration in ms, undefined means no auto-dismiss
}

export type CreateNotificationInput = Omit<Notification, 'id'>
