import React, { useState } from 'react';
import './App.css';
import './profile/Profile.css';

function useCounter(initialValue) {
  const [counter, setCounter] = useState(initialValue);

  const increment = () => setCounter(counter + 1);
  const decrement = () => setCounter(counter - 1);

  return [counter, increment, decrement];
}

export default function AppClass() {
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
