import { useState } from 'react';

function App() {
  // Initial state with two todo items
  const [todos, setTodos] = useState([
    { id: 1, text: 'Complete Lab 11', completed: false },
    { id: 2, text: 'Review JSX Events and State', completed: false }
  ]);
  
  // State for the new todo input
  const [newTodo, setNewTodo] = useState('');

  // Function to toggle todo completion status
  const toggleTodo = (id) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  // Function to add a new todo
  const addTodo = (e) => {
    e.preventDefault();
    if (newTodo.trim() === '') return;
    
    const newId = todos.length > 0 ? Math.max(...todos.map(todo => todo.id)) + 1 : 1;
    
    setTodos([
      ...todos,
      {
        id: newId,
        text: newTodo,
        completed: false
      }
    ]);
    
    setNewTodo('');
  };

  return (
    <div>
      <h1>To-Do List</h1>

      {/* Add new todo form */}
      <form onSubmit={addTodo}>
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Add a new task"
        />
        <button 
          type="submit"
        >
          Add Task
        </button>
      </form>
      
      {/* Todo list */}
      <ul>
        {todos.map(todo => (
          <li key={todo.id}
          style = {{
            textDecoration: todo.completed ? 'line-through' : 'none',
          }}
          >            
          <span>{todo.text}</span>
            <button 
              onClick={() => toggleTodo(todo.id)}
              style={{color: 'red'}}
            >
              X
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
