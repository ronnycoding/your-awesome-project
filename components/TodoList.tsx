'use client';

import React from 'react';
import { useTodoContext } from '@/lib/todoContext';
import TodoItem from './TodoItem';
import AddTodoForm from './AddTodoForm';

export default function TodoList() {
  const { todos } = useTodoContext();

  const activeTodos = todos.filter((todo) => !todo.completed);
  const completedTodos = todos.filter((todo) => todo.completed);

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          My Todo List
        </h1>
        <p className="text-gray-600 mb-6">
          {activeTodos.length} active {activeTodos.length === 1 ? 'task' : 'tasks'}
          {completedTodos.length > 0 &&
            `, ${completedTodos.length} completed`}
        </p>

        <AddTodoForm />

        {todos.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">
              No todos yet. Add one to get started!
            </p>
          </div>
        ) : (
          <div className="space-y-3">
            {activeTodos.length > 0 && (
              <>
                <h2 className="text-lg font-semibold text-gray-700 mt-6 mb-3">
                  Active
                </h2>
                {activeTodos.map((todo) => (
                  <TodoItem key={todo.id} todo={todo} />
                ))}
              </>
            )}

            {completedTodos.length > 0 && (
              <>
                <h2 className="text-lg font-semibold text-gray-700 mt-6 mb-3">
                  Completed
                </h2>
                {completedTodos.map((todo) => (
                  <TodoItem key={todo.id} todo={todo} />
                ))}
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
