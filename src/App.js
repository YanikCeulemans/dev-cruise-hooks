import React, { useState } from 'react';
import './App.css';
import './profile/Profile.css';

export default function App() {
  const [counter, setCounter] = useState(1);
  return (
    <div className="App">
      <div className="counter">
        <button
          className="box with-hover"
          onClick={() => setCounter(counter + 1)}
        >
          +
        </button>
        <span>{counter}</span>
        <button
          className="box with-hover"
          onClick={() => setCounter(counter - 1)}
        >
          -
        </button>
      </div>
    </div>
  );
}
