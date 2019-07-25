import React from 'react';

import ProfileList from '../profiles/ProfileList';
import ProfileHooks from '../profile/ProfileHooks';
import ProfileComponent from '../profile/ProfileClass';
import NotFound from '../NotFound';

function parseRouteFromUrl(url) {
  if (url.pathname === '/') return { name: '' };
  let matched = url.pathname.match(/\/profile\/(\d+)/i);
  if (matched) return { name: 'profile', params: { id: matched[1] } };
  matched = url.pathname.match(/\/profile-class\/(\d+)/i);
  if (matched) return { name: 'profileClass', params: { id: matched[1] } };
  return { name: 'unknown' };
}

export default function Router(props) {
  const route = parseRouteFromUrl(props.url);
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
