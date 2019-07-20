import React from 'react';

import './App.css';
import ProfileList from './profiles/ProfileList';
import ProfileHooks from './profile/ProfileHooks';
import useRouter from './router/useRouter';

function parseRouteFromUrl(url) {
  if (url.pathname === '/') return { name: '' };
  const matched = url.pathname.match(/\/profile\/(\d+)/i);
  if (matched) return { name: 'profile', params: { id: matched[1] } };
  return { name: 'unknown' };
}

function renderForUrl(url) {
  const route = parseRouteFromUrl(url);
  switch (route.name) {
    case '':
      return <ProfileList />;
    case 'profile':
      return <ProfileHooks id={route.params.id} />;
    default:
      return (
        <h1>
          404 Not found{' '}
          <span role="img" aria-label="Thinking emoji">
            🤔
          </span>
        </h1>
      );
  }
}

function App() {
  const url = useRouter();
  return <div className="App">{renderForUrl(url)}</div>;
}

export default App;
