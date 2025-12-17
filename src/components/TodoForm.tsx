import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as stylex from '@stylexjs/stylex'
import {
  createTodoSchema,
  type CreateTodoFormData,
} from '../schemas/todoSchema'
import { Input } from './Input'
import { Textarea } from './Textarea'
import { Select } from './Select'
import { Button } from './Button'
import { neutral } from '../styles/semanticColors.stylex'

type TodoFormProps = {
  onSubmit: (data: CreateTodoFormData) => void
  onCancel?: () => void
  defaultValues?: Partial<CreateTodoFormData>
  submitLabel?: string
}

const styles = stylex.create({
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem',
    padding: '1.5rem',
    backgroundColor: neutral.backgroundWeak,
    borderRadius: '8px',
    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor: neutral.border,
  },
  buttonGroup: {
    display: 'flex',
    gap: '1rem',
    justifyContent: 'flex-end',
  },
})

const priorityOptions = [
  { value: 'low', label: 'Low' },
  { value: 'medium', label: 'Medium' },
  { value: 'high', label: 'High' },
]

export function TodoForm({
  onSubmit,
  onCancel,
  defaultValues,
  submitLabel = 'Save',
}: TodoFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<CreateTodoFormData>({
    resolver: zodResolver(createTodoSchema),
    defaultValues: {
      title: '',
      description: '',
      priority: null,
      isDone: false,
      ...defaultValues,
    },
  })

  return (
    <form {...stylex.props(styles.form)} onSubmit={handleSubmit(onSubmit)}>
      <Input
        label="Title"
        registration={register('title')}
        error={errors.title?.message}
        placeholder="Enter todo title"
        required
      />

      <Textarea
        label="Description"
        registration={register('description')}
        error={errors.description?.message}
        placeholder="Enter todo description (optional)"
        rows={4}
      />

      <Select
        label="Priority"
        registration={register('priority')}
        error={errors.priority?.message}
        options={priorityOptions}
        placeholder="Select priority (optional)"
      />

      <div {...stylex.props(styles.buttonGroup)}>
        {onCancel && (
          <Button
            variant="neutral"
            styleType="secondary"
            onClick={onCancel}
            disabled={isSubmitting}
          >
            Cancel
          </Button>
        )}
        <Button variant="accent" styleType="primary" disabled={isSubmitting}>
          {isSubmitting ? 'Saving...' : submitLabel}
        </Button>
      </div>
    </form>
  )
}
