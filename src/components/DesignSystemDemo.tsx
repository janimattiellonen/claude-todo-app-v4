import * as stylex from '@stylexjs/stylex'
import { Button } from './Button'
import { neutral } from '../styles/semanticColors.stylex'

const styles = stylex.create({
  container: {
    padding: '2rem',
    backgroundColor: neutral.background,
  },
  title: {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '2rem',
    color: neutral.text,
  },
  section: {
    marginBottom: '2rem',
  },
  sectionTitle: {
    fontSize: '18px',
    fontWeight: '600',
    marginBottom: '1rem',
    color: neutral.text,
  },
  buttonGrid: {
    display: 'flex',
    gap: '1rem',
    flexWrap: 'wrap',
    marginBottom: '1rem',
  },
  description: {
    fontSize: '14px',
    color: neutral.textWeak,
    marginBottom: '0.5rem',
  },
})

export function DesignSystemDemo() {
  return (
    <div {...stylex.props(styles.container)}>
      <h1 {...stylex.props(styles.title)}>
        Design System Demo - Semantic Colors
      </h1>

      <div {...stylex.props(styles.section)}>
        <h2 {...stylex.props(styles.sectionTitle)}>Primary Buttons</h2>
        <p {...stylex.props(styles.description)}>
          Using backgroundStrong (Step 9) for solid backgrounds
        </p>
        <div {...stylex.props(styles.buttonGrid)}>
          <Button variant="neutral" styleType="primary">
            Neutral
          </Button>
          <Button variant="accent" styleType="primary">
            Accent
          </Button>
          <Button variant="informative" styleType="primary">
            Informative
          </Button>
          <Button variant="danger" styleType="primary">
            Danger
          </Button>
        </div>
      </div>

      <div {...stylex.props(styles.section)}>
        <h2 {...stylex.props(styles.sectionTitle)}>Secondary Buttons</h2>
        <p {...stylex.props(styles.description)}>
          Using border (Step 7) and componentWeak (Step 3) on hover
        </p>
        <div {...stylex.props(styles.buttonGrid)}>
          <Button variant="neutral" styleType="secondary">
            Neutral
          </Button>
          <Button variant="accent" styleType="secondary">
            Accent
          </Button>
          <Button variant="informative" styleType="secondary">
            Informative
          </Button>
          <Button variant="danger" styleType="secondary">
            Danger
          </Button>
        </div>
      </div>

      <div {...stylex.props(styles.section)}>
        <h2 {...stylex.props(styles.sectionTitle)}>Disabled States</h2>
        <p {...stylex.props(styles.description)}>
          All variants with disabled state
        </p>
        <div {...stylex.props(styles.buttonGrid)}>
          <Button variant="neutral" styleType="primary" disabled>
            Neutral
          </Button>
          <Button variant="accent" styleType="primary" disabled>
            Accent
          </Button>
          <Button variant="informative" styleType="secondary" disabled>
            Informative
          </Button>
          <Button variant="danger" styleType="secondary" disabled>
            Danger
          </Button>
        </div>
      </div>

      <div {...stylex.props(styles.section)}>
        <h2 {...stylex.props(styles.sectionTitle)}>Interactive Demo</h2>
        <p {...stylex.props(styles.description)}>
          Try hovering and focusing (Tab key) to see states
        </p>
        <div {...stylex.props(styles.buttonGrid)}>
          <Button
            variant="accent"
            styleType="primary"
            onClick={() => alert('Accent clicked!')}
          >
            Click Me
          </Button>
          <Button
            variant="danger"
            styleType="secondary"
            onClick={() => alert('Danger clicked!')}
          >
            Delete
          </Button>
        </div>
      </div>

      <div {...stylex.props(styles.section)}>
        <p {...stylex.props(styles.description)}>
          ✓ Semantic tokens mapped from Radix UI primitives
          <br />
          ✓ All 4 variants: neutral, accent, informative, danger
          <br />
          ✓ Focus rings use alpha colors for accessibility
          <br />
          ✓ Hover and active states properly styled
          <br />✓ Disabled state styling applied
        </p>
      </div>
    </div>
  )
}
