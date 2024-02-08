// App.js
import React, { useReducer, useState } from 'react';
import TodosList from './components/TodosList';
import todosData from './data/todosData';
import todosReducer from './reducers/todosReducer';

const initialState = {
  todos: todosData,
};

const App = () => {
  const [state, dispatch] = useReducer(todosReducer, initialState);
  const [newTask, setNewTask] = useState('');

  const handleToggle = (todoId) => {
    dispatch({ type: 'TOGGLE_TODO', payload: todoId });
  };

  const handleDelete = (todoId) => {
    dispatch({ type: 'DELETE_TODO', payload: todoId });
  };

  const handleEdit = (todoId) => {
    dispatch({ type: 'EDIT_TODO', payload: todoId });
  };

  const handleSave = (todoId, editedTodo) => {
    dispatch({ type: 'SAVE_TODO', payload: { id: todoId, title: editedTodo } });
  };

  const handleAddTask = (e) => {
    e.preventDefault();
    if (newTask.trim() !== '') {
      dispatch({
        type: 'ADD_TODO',
        payload: {
          userId: 1,
          id: Date.now(), 
          title: newTask,
          completed: false,
          isEditing: false,
        },
      });
      setNewTask('');
    }
  };

  return (
    <div>
      <h1>Todo App</h1>
      <form onSubmit={handleAddTask}>
        <label>
          <input
            type="text"
            placeholder="Add task"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
          />
        </label>
        <button type="submit">Add</button>
      </form>
      <TodosList
        todos={state.todos}
        onToggle={handleToggle}
        onDelete={handleDelete}
        onEdit={handleEdit}
        onSave={handleSave}
      />
    </div>
  );
};

export default App;
