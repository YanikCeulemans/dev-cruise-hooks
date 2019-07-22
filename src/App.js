import React from 'react';

import './App.css';
import useRouter from './router/useRouter';
import Router from './Router';

function App() {
  const url = useRouter();
  return (
    <div className="App">
      <Router url={url} />
    </div>
  );
}

export default App;
