import { useState } from 'react';

export function useCounter(initialValue) {
  const [counter, setCounter] = useState(initialValue);
  const increment = () => setCounter(counter + 1);
  const decrement = () => setCounter(counter - 1);
  return [counter, increment, decrement];
}
