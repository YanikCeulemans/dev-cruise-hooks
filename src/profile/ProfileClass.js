import React from 'react';

import * as profileApi from '../api/profileApi';
import ProfileInput from './ProfileInput';
import Avatar from './Avatar';
import Loader from './Loader';
import Show from '../helpers/Show';

export default class ProfileComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { profile: null };
  }

  componentDidMount() {
    profileApi.getById(this.props.profileId).then(profile => {
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
      <div className="profile">
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
          onChange={e => this.updateProfileProp('age', Number(e.target.value))}
        />
        <ProfileInput
          type="text"
          value={profile.gender}
          onChange={e => this.updateProfileProp('gender', e.target.value)}
        />
        <Show value={profile} />
      </div>
    );
  }
}
