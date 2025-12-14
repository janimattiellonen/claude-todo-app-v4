import * as stylex from '@stylexjs/stylex'
import type { Notification as NotificationType } from '../types/notification'
import { accent, danger, informative } from '../styles/semanticColors.stylex'

type NotificationProps = {
  notification: NotificationType
  onClose: () => void
}

const baseStyles = stylex.create({
  notification: {
    padding: '1rem',
    borderRadius: '6px',
    borderWidth: '1px',
    borderStyle: 'solid',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: '1rem',
    minWidth: '300px',
    maxWidth: '500px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  },
  message: {
    fontSize: '14px',
    flex: 1,
  },
  closeButton: {
    backgroundColor: 'transparent',
    borderStyle: 'none',
    cursor: 'pointer',
    fontSize: '18px',
    lineHeight: 1,
    padding: '0.25rem',
    borderRadius: '4px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'background-color 0.2s',
  },
})

const variantStyles = stylex.create({
  success: {
    backgroundColor: accent.componentWeak,
    borderColor: accent.border,
    color: accent.text,
  },
  error: {
    backgroundColor: danger.componentWeak,
    borderColor: danger.border,
    color: danger.text,
  },
  info: {
    backgroundColor: informative.componentWeak,
    borderColor: informative.border,
    color: informative.text,
  },
})

const closeButtonVariantStyles = stylex.create({
  success: {
    color: accent.text,
    ':hover': {
      backgroundColor: accent.component,
    },
  },
  error: {
    color: danger.text,
    ':hover': {
      backgroundColor: danger.component,
    },
  },
  info: {
    color: informative.text,
    ':hover': {
      backgroundColor: informative.component,
    },
  },
})

export function Notification({ notification, onClose }: NotificationProps) {
  return (
    <div
      {...stylex.props(
        baseStyles.notification,
        variantStyles[notification.type]
      )}
      role="alert"
    >
      <div {...stylex.props(baseStyles.message)}>{notification.message}</div>
      <button
        {...stylex.props(
          baseStyles.closeButton,
          closeButtonVariantStyles[notification.type]
        )}
        onClick={onClose}
        aria-label="Close notification"
      >
        ×
      </button>
    </div>
  )
}
