import React from 'react';
import './App.css';
import './profile/Profile.css';

import * as profileApi from './api/profileApi';

import Loader from './helpers/Loader';
import Show from './helpers/Show';
import Avatar from './profile/Avatar';
import ProfileInput from './profile/ProfileInput';
import RowLayout from './layout/RowLayout';

export default class AppClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = { profile: null };
  }

  componentDidMount() {
    profileApi.getById(0).then(profile => {
      this.setState({ profile });
    });
  }

  updateProfileProp(propName, value) {
    this.setState(prevState => ({
      profile: { ...prevState.profile, [propName]: value },
    }));
  }

  render() {
    const { profile } = this.state;
    if (!profile) return <Loader />;
    return (
      <div className="App">
        <RowLayout className="profile">
          <Avatar url={profile.avatarUrl} />
          <ProfileInput
            type="text"
            value={profile.firstName}
            onChange={e => this.updateProfileProp('firstName', e.target.value)}
          />
          <ProfileInput
            type="text"
            value={profile.lastName}
            onChange={e => this.updateProfileProp('lastName', e.target.value)}
          />
          <ProfileInput
            type="number"
            value={profile.age}
            onChange={e =>
              this.updateProfileProp('age', Number(e.target.value))
            }
          />
          <ProfileInput
            type="text"
            value={profile.gender}
            onChange={e => this.updateProfileProp('gender', e.target.value)}
          />
          <Show value={profile} />
        </RowLayout>
      </div>
    );
  }
}
