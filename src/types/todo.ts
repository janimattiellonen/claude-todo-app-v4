/**
 * Todo Type Definitions
 */

export type Priority = 'low' | 'medium' | 'high' | null

export type Todo = {
  id: string
  title: string
  description: string
  priority: Priority
  isDone: boolean
  createdAt: Date
  updatedAt: Date
}

export type CreateTodoInput = Omit<Todo, 'id' | 'createdAt' | 'updatedAt'>

export type UpdateTodoInput = Partial<
  Omit<Todo, 'id' | 'createdAt' | 'updatedAt'>
>
