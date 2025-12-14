import * as stylex from '@stylexjs/stylex'
import {
  neutral,
  accent,
  informative,
  danger,
} from '../styles/semanticColors.stylex'

type ButtonVariant = 'neutral' | 'accent' | 'informative' | 'danger'
type ButtonStyle = 'primary' | 'secondary'

type ButtonProps = {
  children: React.ReactNode
  variant?: ButtonVariant
  styleType?: ButtonStyle
  disabled?: boolean
  onClick?: () => void
}

// Base button styles
const baseStyles = stylex.create({
  button: {
    paddingTop: '0.5rem',
    paddingBottom: '0.5rem',
    paddingLeft: '1rem',
    paddingRight: '1rem',
    borderRadius: '6px',
    borderWidth: '1px',
    borderStyle: 'solid',
    fontSize: '14px',
    fontWeight: '500',
    cursor: 'pointer',
    transition: 'all 0.2s',
    ':disabled': {
      cursor: 'not-allowed',
      opacity: 0.6,
    },
  },
})

// Primary button styles (solid background)
const primaryStyles = stylex.create({
  neutral: {
    backgroundColor: neutral.backgroundStrong,
    color: '#ffffff',
    borderColor: neutral.backgroundStrong,
    ':hover:not(:disabled)': {
      backgroundColor: neutral.backgroundStrongHover,
      borderColor: neutral.backgroundStrongHover,
    },
    ':focus-visible': {
      outline: 'none',
      boxShadow: `0 0 0 3px ${neutral.borderFocus}`,
    },
  },
  accent: {
    backgroundColor: accent.backgroundStrong,
    color: '#ffffff',
    borderColor: accent.backgroundStrong,
    ':hover:not(:disabled)': {
      backgroundColor: accent.backgroundStrongHover,
      borderColor: accent.backgroundStrongHover,
    },
    ':focus-visible': {
      outline: 'none',
      boxShadow: `0 0 0 3px ${accent.borderFocus}`,
    },
  },
  informative: {
    backgroundColor: informative.backgroundStrong,
    color: '#ffffff',
    borderColor: informative.backgroundStrong,
    ':hover:not(:disabled)': {
      backgroundColor: informative.backgroundStrongHover,
      borderColor: informative.backgroundStrongHover,
    },
    ':focus-visible': {
      outline: 'none',
      boxShadow: `0 0 0 3px ${informative.borderFocus}`,
    },
  },
  danger: {
    backgroundColor: danger.backgroundStrong,
    color: '#ffffff',
    borderColor: danger.backgroundStrong,
    ':hover:not(:disabled)': {
      backgroundColor: danger.backgroundStrongHover,
      borderColor: danger.backgroundStrongHover,
    },
    ':focus-visible': {
      outline: 'none',
      boxShadow: `0 0 0 3px ${danger.borderFocus}`,
    },
  },
})

// Secondary button styles (outline/ghost)
const secondaryStyles = stylex.create({
  neutral: {
    backgroundColor: 'transparent',
    color: neutral.text,
    borderColor: neutral.border,
    ':hover:not(:disabled)': {
      backgroundColor: neutral.componentWeak,
      borderColor: neutral.borderHover,
    },
    ':focus-visible': {
      outline: 'none',
      boxShadow: `0 0 0 3px ${neutral.borderFocus}`,
    },
  },
  accent: {
    backgroundColor: 'transparent',
    color: accent.text,
    borderColor: accent.border,
    ':hover:not(:disabled)': {
      backgroundColor: accent.componentWeak,
      borderColor: accent.borderHover,
    },
    ':focus-visible': {
      outline: 'none',
      boxShadow: `0 0 0 3px ${accent.borderFocus}`,
    },
  },
  informative: {
    backgroundColor: 'transparent',
    color: informative.text,
    borderColor: informative.border,
    ':hover:not(:disabled)': {
      backgroundColor: informative.componentWeak,
      borderColor: informative.borderHover,
    },
    ':focus-visible': {
      outline: 'none',
      boxShadow: `0 0 0 3px ${informative.borderFocus}`,
    },
  },
  danger: {
    backgroundColor: 'transparent',
    color: danger.text,
    borderColor: danger.border,
    ':hover:not(:disabled)': {
      backgroundColor: danger.componentWeak,
      borderColor: danger.borderHover,
    },
    ':focus-visible': {
      outline: 'none',
      boxShadow: `0 0 0 3px ${danger.borderFocus}`,
    },
  },
})

export function Button({
  children,
  variant = 'neutral',
  styleType = 'primary',
  disabled = false,
  onClick,
}: ButtonProps) {
  const styleMap = styleType === 'primary' ? primaryStyles : secondaryStyles

  return (
    <button
      {...stylex.props(baseStyles.button, styleMap[variant])}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  )
}
