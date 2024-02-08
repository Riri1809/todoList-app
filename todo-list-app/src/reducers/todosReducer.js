const todosReducer = (state, action) => {
    switch (action.type) {
      case 'TOGGLE_TODO':
        return {
          ...state,
          todos: state.todos.map((todo) =>
            todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo
          ),
        };
  
      case 'DELETE_TODO':
        return {
          ...state,
          todos: state.todos.filter((todo) => todo.id !== action.payload),
        };
  
      case 'EDIT_TODO':
        return {
          ...state,
          todos: state.todos.map((todo) =>
            todo.id === action.payload ? { ...todo, isEditing: true } : todo
          ),
        };
  
      case 'SAVE_TODO':
        return {
          ...state,
          todos: state.todos.map((todo) =>
            todo.id === action.payload.id
              ? { ...todo, title: action.payload.title, isEditing: false }
              : todo
          ),
        };
  
      default:
        return state;
    }
  };
  
  export default todosReducer;
  