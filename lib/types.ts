export interface Todo {
  id: string;
  text: string;
  completed: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface TodoContextType {
  todos: Todo[];
  addTodo: (text: string) => void;
  editTodo: (id: string, text: string) => void;
  deleteTodo: (id: string) => void;
  toggleTodo: (id: string) => void;
}
