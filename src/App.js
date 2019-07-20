import React from 'react';

import './App.css';
import ProfileList from './profiles/ProfileList';
import ProfileHooks from './profile/ProfileHooks';
import useRouter from './router/useRouter';
import NotFound from './NotFound';
import ProfileComponent from './profile/ProfileClass';

function parseRouteFromUrl(url) {
  if (url.pathname === '/') return { name: '' };
  let matched = url.pathname.match(/\/profile\/(\d+)/i);
  if (matched) return { name: 'profile', params: { id: matched[1] } };
  matched = url.pathname.match(/\/profile-class\/(\d+)/i);
  if (matched) return { name: 'profileClass', params: { id: matched[1] } };
  return { name: 'unknown' };
}

function renderForUrl(url) {
  const route = parseRouteFromUrl(url);
  switch (route.name) {
    case '':
      return <ProfileList />;
    case 'profile':
      return <ProfileHooks profileId={route.params.id} />;
    case 'profileClass':
      return <ProfileComponent profileId={route.params.id} />;
    default:
      return <NotFound />;
  }
}

function App() {
  const url = useRouter();
  return <div className="App">{renderForUrl(url)}</div>;
}

export default App;
