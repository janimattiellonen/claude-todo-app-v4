import * as stylex from '@stylexjs/stylex'
import type { UseFormRegisterReturn } from 'react-hook-form'
import { neutral, danger } from '../styles/semanticColors.stylex'

type SelectOption = {
  value: string
  label: string
}

type SelectProps = {
  label: string
  error?: string
  registration: UseFormRegisterReturn
  options: SelectOption[]
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
  select: {
    padding: '0.5rem 0.75rem',
    fontSize: '14px',
    borderRadius: '6px',
    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor: neutral.border,
    backgroundColor: neutral.background,
    color: neutral.text,
    cursor: 'pointer',
    transition: 'border-color 0.2s, box-shadow 0.2s',
    ':focus': {
      outline: 'none',
      borderColor: neutral.borderActive,
      boxShadow: `0 0 0 3px ${neutral.borderFocus}`,
    },
  },
  selectError: {
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

export function Select({
  label,
  error,
  registration,
  options,
  placeholder,
  required = false,
}: SelectProps) {
  return (
    <div {...stylex.props(styles.container)}>
      <label {...stylex.props(styles.label)}>
        {label}
        {required && <span {...stylex.props(styles.required)}> *</span>}
      </label>
      <select
        {...registration}
        {...stylex.props(styles.select, error && styles.selectError)}
        aria-invalid={error ? 'true' : 'false'}
        aria-describedby={error ? `${registration.name}-error` : undefined}
      >
        {placeholder && <option value="">{placeholder}</option>}
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
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
