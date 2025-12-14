import * as stylex from '@stylexjs/stylex'
import { colors } from './StyleXTest.stylex'

const styles = stylex.create({
  container: {
    padding: '2rem',
    backgroundColor: colors.background,
    borderRadius: '8px',
    borderWidth: '2px',
    borderStyle: 'solid',
    borderColor: colors.primary,
  },
  title: {
    color: colors.primary,
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '1rem',
  },
  text: {
    color: colors.text,
    fontSize: '16px',
    marginBottom: '0.5rem',
  },
  highlight: {
    color: colors.secondary,
    fontWeight: '600',
  },
})

export function StyleXTest() {
  return (
    <div {...stylex.props(styles.container)}>
      <h1 {...stylex.props(styles.title)}>StyleX Test Component</h1>
      <p {...stylex.props(styles.text)}>
        If you can see this with styled borders and colors, StyleX is working
        correctly!
      </p>
      <p {...stylex.props(styles.text)}>
        This component uses:{' '}
        <span {...stylex.props(styles.highlight)}>
          .styles.ts file for defineVars
        </span>
      </p>
      <p {...stylex.props(styles.text)}>
        ✓ StyleX compilation working
        <br />
        ✓ CSS variables defined
        <br />✓ Styles applied
      </p>
    </div>
  )
}
