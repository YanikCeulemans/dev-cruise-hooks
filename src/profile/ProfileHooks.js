import React from 'react';

import './Profile.css';
import useProfile from './useProfile';
import Show from '../helpers/Show';

export default function(props) {
  const profileCtx = useProfile(props.profileId);
  if (!profileCtx.profile) return <h1>Loading...</h1>;
  return (
    <div className="profile">
      <div
        className="avatar"
        style={{
          backgroundImage: `url(/${profileCtx.inputProps('avatarUrl').value})`,
        }}
      />
      <input
        className="profile-input box with-hover"
        type="text"
        {...profileCtx.inputProps('firstName')}
      />
      <input
        className="profile-input box with-hover"
        type="text"
        {...profileCtx.inputProps('lastName')}
      />
      <input
        className="profile-input box with-hover"
        type="number"
        {...profileCtx.inputProps('age', Number)}
      />
      <input
        className="profile-input box with-hover"
        type="text"
        {...profileCtx.inputProps('gender')}
      />
      <Show value={profileCtx.profile} />
    </div>
  );
}
