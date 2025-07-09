{/*import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
*/}


import './App.css';
import { useState } from 'react';

function App() {
  // 1. State declarations (at the top of the component)
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');
  const [newCategory, setNewCategory] = useState('Study');
  const [customCategory, setCustomCategory] = useState('');

  // 2. Handle adding a new to-do
  function handleAddTodo() {
    if (newTodo.trim() === '') return;

    const categoryToUse =
      newCategory === 'Other' && customCategory.trim()
        ? customCategory.trim()
        : newCategory;

    const newTask = {
      id: Date.now(),
      text: newTodo.trim(),
      completed: false,
      category: categoryToUse,
    };

    setTodos([...todos, newTask]);
    setNewTodo('');
    setCustomCategory('');
  }

  return (
    <div style={{ padding: '20px' }}>
      <h1>My To-Do List</h1>

      {/* 3. Input section */}
      <div style={{ marginBottom: '1rem' }}>
        <input
          type="text"
          placeholder="New to-do..."
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />

        <select
          value={newCategory}
          onChange={(e) => setNewCategory(e.target.value)}
          style={{ marginLeft: '0.5rem' }}
        >
          <option value="Study">Study</option>
          <option value="Housework">Housework</option>
          <option value="Exercise">Exercise</option>
          <option value="Hobbies">Hobbies</option>
          <option value="Other">Other...</option>
        </select>

        {newCategory === 'Other' && (
          <input
            type="text"
            placeholder="Custom category"
            value={customCategory}
            onChange={(e) => setCustomCategory(e.target.value)}
            style={{ marginLeft: '0.5rem' }}
          />
        )}

        <button onClick={handleAddTodo} style={{ marginLeft: '0.5rem' }}>
          Add
        </button>
      </div>

      {/* 4. List rendering section */}
      <ul>
        {todos.map((td) => (
          <li key={td.id}>
            {td.completed ? '✅' : '❌'}{' '}
            <span className={`category ${td.category.toLowerCase()}`}>
              [{td.category}]
            </span>{' '}
            {td.text}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
