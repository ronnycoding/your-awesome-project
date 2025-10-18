'use client';

import React, { useState, FormEvent } from 'react';
import { useTodoContext } from '@/lib/todoContext';

export default function AddTodoForm() {
  const [text, setText] = useState('');
  const [error, setError] = useState('');
  const { addTodo } = useTodoContext();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const trimmedText = text.trim();

    if (!trimmedText) {
      setError('Please enter a todo');
      return;
    }

    addTodo(trimmedText);
    setText('');
    setError('');
  };

  return (
    <form onSubmit={handleSubmit} className="mb-6">
      <div className="flex gap-2">
        <input
          type="text"
          value={text}
          onChange={(e) => {
            setText(e.target.value);
            if (error) setError('');
          }}
          className="flex-1 px-4 py-2 border border-gray-300 rounded-lg
                     focus:ring-2 focus:ring-blue-500 focus:border-transparent
                     outline-none transition"
          placeholder="Add a new todo..."
          aria-label="New todo text"
        />
        <button
          type="submit"
          className="px-6 py-2 bg-blue-600 text-white rounded-lg
                     hover:bg-blue-700 active:bg-blue-800
                     transition duration-200 font-medium"
        >
          Add
        </button>
      </div>
      {error && (
        <p className="text-red-500 text-sm mt-2" role="alert">
          {error}
        </p>
      )}
    </form>
  );
}
