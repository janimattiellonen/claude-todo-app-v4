import * as stylex from '@stylexjs/stylex'
import type { UseFormRegisterReturn } from 'react-hook-form'
import { neutral, danger } from '../styles/semanticColors.stylex'

type InputProps = {
  label: string
  error?: string
  registration: UseFormRegisterReturn
  type?: 'text' | 'email' | 'password'
  placeholder?: string
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
  input: {
    padding: '0.5rem 0.75rem',
    fontSize: '14px',
    borderRadius: '6px',
    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor: neutral.border,
    backgroundColor: neutral.background,
    color: neutral.text,
    transition: 'border-color 0.2s, box-shadow 0.2s',
    ':focus': {
      outline: 'none',
      borderColor: neutral.borderActive,
      boxShadow: `0 0 0 3px ${neutral.borderFocus}`,
    },
  },
  inputError: {
    borderColor: danger.border,
    ':focus': {
      borderColor: danger.borderActive,
      boxShadow: `0 0 0 3px ${danger.borderFocus}`,
    },
  },
  errorMessage: {
    fontSize: '13px',
    color: danger.text,
  },
})

export function Input({
  label,
  error,
  registration,
  type = 'text',
  placeholder,
  required = false,
}: InputProps) {
  return (
    <div {...stylex.props(styles.container)}>
      <label {...stylex.props(styles.label)}>
        {label}
        {required && <span {...stylex.props(styles.required)}> *</span>}
      </label>
      <input
        {...registration}
        {...stylex.props(styles.input, error && styles.inputError)}
        type={type}
        placeholder={placeholder}
        aria-invalid={error ? 'true' : 'false'}
        aria-describedby={error ? `${registration.name}-error` : undefined}
      />
      {error && (
        <span
          {...stylex.props(styles.errorMessage)}
          id={`${registration.name}-error`}
          role="alert"
        >
          {error}
        </span>
      )}
    </div>
  )
}
