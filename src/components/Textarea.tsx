import * as stylex from '@stylexjs/stylex'
import type { UseFormRegisterReturn } from 'react-hook-form'
import { neutral, danger } from '../styles/semanticColors.stylex'

type TextareaProps = {
  label: string
  error?: string
  registration: UseFormRegisterReturn
  placeholder?: string
  rows?: number
  required?: boolean
}

const styles = stylex.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem',
  },
  label: {
    fontSize: '14px',
    fontWeight: '500',
    color: neutral.text,
  },
  required: {
    color: danger.text,
  },
  textarea: {
    padding: '0.5rem 0.75rem',
    fontSize: '14px',
    borderRadius: '6px',
    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor: neutral.border,
    backgroundColor: neutral.background,
    color: neutral.text,
    fontFamily: 'inherit',
    resize: 'vertical',
    transition: 'border-color 0.2s, box-shadow 0.2s',
    ':focus': {
      outline: 'none',
      borderColor: neutral.borderActive,
      boxShadow: `0 0 0 3px ${neutral.borderFocus}`,
    },
  },
  textareaError: {
    borderColor: danger.border,
    ':focus': {
      borderColor: danger.borderActive,
      boxShadow: `0 0 0 3px ${danger.borderFocus}`,
    },
  },
  errorMessage: {
    fontSize: '13px',
    color: danger.text,
    display: 'flex',
    alignItems: 'center',
    gap: '0.375rem',
  },
  errorIcon: {
    fontSize: '16px',
    lineHeight: 1,
  },
})

export function Textarea({
  label,
  error,
  registration,
  placeholder,
  rows = 4,
  required = false,
}: TextareaProps) {
  return (
    <div {...stylex.props(styles.container)}>
      <label {...stylex.props(styles.label)}>
        {label}
        {required && <span {...stylex.props(styles.required)}> *</span>}
      </label>
      <textarea
        {...registration}
        {...stylex.props(styles.textarea, error && styles.textareaError)}
        placeholder={placeholder}
        rows={rows}
        aria-invalid={error ? 'true' : 'false'}
        aria-describedby={error ? `${registration.name}-error` : undefined}
      />
      {error && (
        <span
          {...stylex.props(styles.errorMessage)}
          id={`${registration.name}-error`}
          role="alert"
        >
          <span {...stylex.props(styles.errorIcon)} aria-hidden="true">
            ⚠
          </span>
          {error}
        </span>
      )}
    </div>
  )
}
