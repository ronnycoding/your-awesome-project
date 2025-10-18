import { Todo } from './types';

const STORAGE_KEY = 'todos';

export function saveTodos(todos: Todo[]): void {
  try {
    const serialized = JSON.stringify(todos);
    localStorage.setItem(STORAGE_KEY, serialized);
  } catch (error) {
    console.error('Failed to save todos to localStorage:', error);
    // Handle quota exceeded or other storage errors
    if (error instanceof DOMException && error.name === 'QuotaExceededError') {
      alert('Storage quota exceeded. Please delete some todos.');
    }
  }
}

export function loadTodos(): Todo[] | null {
  try {
    const serialized = localStorage.getItem(STORAGE_KEY);
    if (serialized === null) {
      return null;
    }
    const parsed = JSON.parse(serialized);
    // Convert date strings back to Date objects
    return parsed.map((todo: Todo) => ({
      ...todo,
      createdAt: new Date(todo.createdAt),
      updatedAt: new Date(todo.updatedAt),
    }));
  } catch (error) {
    console.error('Failed to load todos from localStorage:', error);
    return null;
  }
}
