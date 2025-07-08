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

import {useState} from 'react';
function App() {
  const [todos, setTodos] = useState ('');

  return (
    <div style={{ padding: '20px' }}>
      <h1>My To-Do List</h1>
      <ul>
        <div style={{ marginBottom: '1rem' }}>
  <input
    type="text"
    placeholder="New to-do..."
    value={newTodo}
    onChange={(e) => setNewTodo(e.target.value)}
  />
  <button onClick={handleAddTodo}>Add</button>
</div>

        {todos.map((td) => (
          <li key={td.id}>
          {td.completed ? '✅' : '❌'}{' '}<span className={`category ${td.category.toLowerCase()}`}>
        [{td.category}]
      </span>{' '} {td.text}
        </li>
        ))}
      </ul>
    </div>
  );
}

export default App;