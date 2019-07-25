import React from 'react';

import './App.css';
import useUrl from './router/useUrl';
import Router from './router/Router';

function App() {
  const url = useUrl();
  return (
    <div className="App">
      <Router url={url} />
    </div>
  );
}

export default App;
