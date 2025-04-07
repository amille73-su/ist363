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
    <div style={{ maxWidth: '500px', margin: '0 auto', padding: '20px' }}>
      <h1>To-Do List</h1>
      
      {/* Todo list */}
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {todos.map(todo => (
          <li 
            key={todo.id} 
            style={{ 
              display: 'flex', 
              alignItems: 'center', 
              margin: '8px 0',
              textDecoration: todo.completed ? 'line-through' : 'none',
              color: todo.completed ? '#888' : '#000'
            }}
          >
            <span style={{ flexGrow: 1 }}>{todo.text}</span>
            <button 
              onClick={() => toggleTodo(todo.id)}
              style={{ 
                marginLeft: '10px',
                backgroundColor: '#f44336',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                padding: '4px 8px',
                cursor: 'pointer'
              }}
            >
              {todo.completed ? '✓' : 'X'}
            </button>
          </li>
        ))}
      </ul>
      
      {/* Add new todo form */}
      <form onSubmit={addTodo} style={{ marginTop: '20px' }}>
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Add a new task"
          style={{
            padding: '8px',
            width: '70%',
            marginRight: '10px'
          }}
        />
        <button 
          type="submit"
          style={{
            padding: '8px 16px',
            backgroundColor: '#4CAF50',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          Add Task
        </button>
      </form>
    </div>
  );
}

export default App;