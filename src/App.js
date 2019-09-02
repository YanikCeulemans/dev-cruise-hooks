import React from 'react';
import './App.css';
import './profile/Profile.css';
import { useCounter } from './useCounter';

export default function App() {
  const [counter, increment, decrement] = useCounter(1);
  return (
    <div className="App">
      <div className="counter">
        <button className="box with-hover" onClick={increment}>
          +
        </button>
        <span>{counter}</span>
        <button className="box with-hover" onClick={decrement}>
          -
        </button>
      </div>
    </div>
  );
}
