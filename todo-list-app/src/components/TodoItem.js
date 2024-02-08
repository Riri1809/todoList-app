// components/TodoItem.js
import React, { useState } from 'react';

const TodoItem = ({ todo, onToggle, onDelete, onEdit, onSave }) => {
  const [isEditing, setEditing] = useState(false);
  const [editedTodo, setEditedTodo] = useState(todo.title);

  const handleToggle = () => {
    onToggle(todo.id);
  };

  const handleDelete = () => {
    onDelete(todo.id);
  };

  const handleEdit = () => {
    setEditing(true);
  };

  const handleSave = () => {
    onSave(todo.id, editedTodo);
    setEditing(false);
  };

  return (
    <div>
      <input type="checkbox" checked={todo.completed} onChange={handleToggle} />
      {isEditing ? (
        <input
          type="text"
          value={editedTodo}
          onChange={(e) => setEditedTodo(e.target.value)}
        />
      ) : (
        <span>{todo.title}</span>
      )}
      <button onClick={handleDelete} disabled={!todo.completed}>
        Delete
      </button>
      {isEditing ? (
        <button onClick={handleSave}>Save</button>
      ) : (
        <button onClick={handleEdit}>Edit</button>
      )}
    </div>
  );
};

export default TodoItem;
