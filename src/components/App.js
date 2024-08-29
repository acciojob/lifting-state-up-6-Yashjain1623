import React, { useState } from 'react';
import TodoList from './TodoList';

function App() {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Learn React', completed: false },
    { id: 2, text: 'Build a React App', completed: false },
    { id: 3, text: 'Deploy the React App', completed: false }
  ]);

  const handleComplete = (id) => {
    setTodos(todos.map((todo) =>
      todo.id === id ? { ...todo, completed: true } : todo
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
