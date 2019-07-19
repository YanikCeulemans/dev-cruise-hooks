import React from 'react';

import styles from './profileList.module.css';
import useProfiles from './useProfiles';
import Row from '../layout/Row';
import * as myHistory from '../helpers/history';

function ProfileList(props) {
  const profiles = useProfiles();
  if (!profiles) return (<h1>Loading...</h1>);
  return (
    <Row>
      {profiles.map(profile => {
        return (
          <div
            className={`${styles.entry} box with-hover`} key={profile.id}
            onClick={e => myHistory.navigateTo(`/profile/${profile.id}`)}
          >
            <span>{profile.firstName} {profile.lastName}</span>
          </div>
        );
      })}
    </Row>
  );
}

export default ProfileList;
