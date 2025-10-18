'use client';

import React, { useState, FormEvent, useEffect, useRef } from 'react';
import { Todo } from '@/lib/types';
import { useTodoContext } from '@/lib/todoContext';

interface EditTodoFormProps {
  todo: Todo;
  onSave: () => void;
  onCancel: () => void;
}

export default function EditTodoForm({ todo, onSave, onCancel }: EditTodoFormProps) {
  const [text, setText] = useState(todo.text);
  const { editTodo } = useTodoContext();
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    // Focus input when edit mode starts
    inputRef.current?.focus();
    inputRef.current?.select();
  }, []);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const trimmedText = text.trim();

    if (!trimmedText) {
      onCancel();
      return;
    }

    editTodo(todo.id, trimmedText);
    onSave();
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      onCancel();
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <input
        ref={inputRef}
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={handleKeyDown}
        className="flex-1 px-3 py-2 border border-blue-500 rounded-lg
                   focus:ring-2 focus:ring-blue-500 focus:border-transparent
                   outline-none"
        aria-label="Edit todo text"
      />
      <button
        type="submit"
        className="px-4 py-2 bg-green-600 text-white rounded-lg
                   hover:bg-green-700 transition text-sm"
      >
        Save
      </button>
      <button
        type="button"
        onClick={onCancel}
        className="px-4 py-2 bg-gray-500 text-white rounded-lg
                   hover:bg-gray-600 transition text-sm"
      >
        Cancel
      </button>
    </form>
  );
}
