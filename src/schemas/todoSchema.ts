import { z } from 'zod'

/**
 * Zod Validation Schemas for Todo Forms
 */

export const prioritySchema = z.enum(['low', 'medium', 'high']).nullable()

export const createTodoSchema = z.object({
  title: z
    .string()
    .min(1, 'Title is required')
    .max(100, 'Title must be 100 characters or less'),
  description: z
    .string()
    .max(500, 'Description must be 500 characters or less'),
  priority: prioritySchema,
  isDone: z.boolean(),
})

export const updateTodoSchema = createTodoSchema.partial()

export type CreateTodoFormData = z.infer<typeof createTodoSchema>
export type UpdateTodoFormData = z.infer<typeof updateTodoSchema>
