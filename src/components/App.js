import React, { useState } from 'react';
import TodoList from './TodoList';

function App() {
  const [todos, setTodos] = useState([
  { id: 1, text: 'Learn React', completed: true },
  { id: 2, text: 'Build a React App', completed: true},
  { id: 3, text: 'Deploy the React App', completed: true}
]);

  const handleComplete = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: false } : todo
    ));
  };

  return (
    <div>
      <h1>Todo List</h1>
      <TodoList todos={todos} onComplete={handleComplete} />
    </div>
  );
}

export default App;
