import { v4 as uuidv4 } from 'uuid'
import { useTodoContext } from './useTodoContext'
import type { Todo, CreateTodoInput, UpdateTodoInput } from '../types/todo'

/**
 * Todo Service Hook
 *
 * Provides CRUD operations for todos with automatic ID generation and timestamp management.
 * This service layer can be easily replaced with API calls in the future.
 */
export function useTodoService() {
  const { todos, addTodo, updateTodo, deleteTodo } = useTodoContext()

  /**
   * Create a new todo
   * Generates UUID and timestamps automatically
   */
  const createTodo = (input: CreateTodoInput): Todo => {
    const now = new Date()
    const newTodo: Todo = {
      id: uuidv4(),
      ...input,
      createdAt: now,
      updatedAt: now,
    }
    addTodo(newTodo)
    return newTodo
  }

  /**
   * Fetch all todos
   */
  const fetchTodos = (): Todo[] => {
    return todos
  }

  /**
   * Fetch a single todo by ID
   */
  const fetchTodoById = (id: string): Todo | null => {
    const todo = todos.find((t) => t.id === id)
    return todo || null
  }

  /**
   * Update an existing todo
   * Updates the updatedAt timestamp automatically
   */
  const updateTodoById = (
    id: string,
    updates: UpdateTodoInput
  ): Todo | null => {
    const existingTodo = fetchTodoById(id)
    if (!existingTodo) {
      return null
    }

    const updatedTodo: Todo = {
      ...existingTodo,
      ...updates,
      updatedAt: new Date(),
    }

    updateTodo(id, { ...updates, updatedAt: updatedTodo.updatedAt })
    return updatedTodo
  }

  /**
   * Delete a todo by ID
   */
  const deleteTodoById = (id: string): boolean => {
    const existingTodo = fetchTodoById(id)
    if (!existingTodo) {
      return false
    }

    deleteTodo(id)
    return true
  }

  return {
    createTodo,
    fetchTodos,
    fetchTodoById,
    updateTodo: updateTodoById,
    deleteTodo: deleteTodoById,
  }
}
