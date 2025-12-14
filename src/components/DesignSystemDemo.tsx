import * as stylex from '@stylexjs/stylex'
import { Button } from './Button'
import { neutral } from '../styles/semanticColors.stylex'
import { useTodoService } from '../hooks/useTodoService'
import { useNotificationContext } from '../hooks/useNotificationContext'

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
  todoList: {
    marginTop: '1rem',
    padding: '1rem',
    backgroundColor: neutral.backgroundWeak,
    borderRadius: '6px',
    minHeight: '100px',
  },
  todoItem: {
    padding: '0.75rem',
    marginBottom: '0.5rem',
    backgroundColor: neutral.background,
    borderRadius: '4px',
    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor: neutral.border,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  todoText: {
    fontSize: '14px',
    color: neutral.text,
  },
  emptyState: {
    fontSize: '14px',
    color: neutral.textWeak,
    fontStyle: 'italic',
    textAlign: 'center',
    padding: '2rem',
  },
})

export function DesignSystemDemo() {
  const todoService = useTodoService()
  const todos = todoService.fetchTodos()
  const { addNotification } = useNotificationContext()

  const handleAddTestTodo = () => {
    todoService.createTodo({
      title: `Test Todo ${Date.now()}`,
      description: 'This is a test todo created to verify TodoService works',
      priority: 'medium',
      isDone: false,
    })
  }

  const handleDeleteTodo = (id: string) => {
    todoService.deleteTodo(id)
  }

  const showSuccessNotification = () => {
    addNotification({
      type: 'success',
      message: 'Todo created successfully!',
      duration: 3000,
    })
  }

  const showErrorNotification = () => {
    addNotification({
      type: 'error',
      message: 'Failed to save todo. Please try again.',
      duration: 5000,
    })
  }

  const showInfoNotification = () => {
    addNotification({
      type: 'info',
      message: 'Remember to save your changes before leaving.',
      duration: 4000,
    })
  }

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

      <div {...stylex.props(styles.section)}>
        <h2 {...stylex.props(styles.sectionTitle)}>Notification System Test</h2>
        <p {...stylex.props(styles.description)}>
          Testing notification variants with auto-dismiss functionality
        </p>
        <div {...stylex.props(styles.buttonGrid)}>
          <Button
            variant="accent"
            styleType="primary"
            onClick={showSuccessNotification}
          >
            Show Success
          </Button>
          <Button
            variant="danger"
            styleType="primary"
            onClick={showErrorNotification}
          >
            Show Error
          </Button>
          <Button
            variant="informative"
            styleType="primary"
            onClick={showInfoNotification}
          >
            Show Info
          </Button>
        </div>
      </div>

      <div {...stylex.props(styles.section)}>
        <h2 {...stylex.props(styles.sectionTitle)}>TodoService Test</h2>
        <p {...stylex.props(styles.description)}>
          Testing CRUD operations: Create, Read, and Delete
        </p>
        <div {...stylex.props(styles.buttonGrid)}>
          <Button
            variant="accent"
            styleType="primary"
            onClick={handleAddTestTodo}
          >
            Add Test Todo
          </Button>
        </div>
        <div {...stylex.props(styles.todoList)}>
          {todos.length === 0 ? (
            <div {...stylex.props(styles.emptyState)}>
              No todos yet. Click "Add Test Todo" to create one.
            </div>
          ) : (
            todos.map((todo) => (
              <div key={todo.id} {...stylex.props(styles.todoItem)}>
                <div>
                  <div {...stylex.props(styles.todoText)}>
                    <strong>{todo.title}</strong>
                  </div>
                  <div {...stylex.props(styles.description)}>
                    Priority: {todo.priority || 'none'} | Created:{' '}
                    {todo.createdAt.toLocaleString()}
                  </div>
                </div>
                <Button
                  variant="danger"
                  styleType="secondary"
                  onClick={() => handleDeleteTodo(todo.id)}
                >
                  Delete
                </Button>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  )
}
