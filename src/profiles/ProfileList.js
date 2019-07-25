import React from 'react';

import styles from './profileList.module.css';
import useProfiles from './useProfiles';
import RowLayout from '../layout/RowLayout';
import * as myHistory from '../helpers/history';

function ProfileList(props) {
  const profiles = useProfiles();
  if (!profiles) return <h1>Loading...</h1>;
  return (
    <RowLayout>
      {profiles.map(profile => {
        return (
          <div
            className={`${styles.entry} box with-hover with-anim`}
            key={profile.id}
            onClick={e => myHistory.navigateTo(`/profile/${profile.id}`)}
          >
            <span>
              {profile.firstName} {profile.lastName}
            </span>
          </div>
        );
      })}
    </RowLayout>
  );
}

export default ProfileList;
