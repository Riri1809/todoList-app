// components/TodosList.js
import React from 'react';
import TodoItem from './TodoItem';

const TodosList = ({ todos, onToggle, onDelete, onEdit, onSave }) => {
  return (
    <div>
      <h2>Todo List</h2>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggle={onToggle}
          onDelete={onDelete}
          onEdit={onEdit}
          onSave={onSave}
        />
      ))}
    </div>
  );
};

export default TodosList;
