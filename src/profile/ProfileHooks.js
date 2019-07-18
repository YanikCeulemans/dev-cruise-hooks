import React, { useState } from 'react';

import './Profile.css';
import './Avatar.css';
import useProfile from './useProfile';
import Show from '../helpers/Show';

export default function(props) {
    const [lastName, setLastName] = useState('Ceulemans');
    const profileInputLens = useProfile();
    return (
        <div className="profile">
            <div className="avatar" style={{backgroundImage: `url(${profileInputLens('avatarUrl').value})`}}></div>
            {/* <input className="profile-input" type="text" value={profile.firstName} /> */}
            <input className="profile-input" type="text" {...profileInputLens('firstName')} />
            <input className="profile-input" type="text" value={lastName} onChange={e => setLastName(e.target.value)} />
            <input className="profile-input" type="number" {...profileInputLens('age')} />
            {/* <pre>{JSON.stringify(profileInputLens(), null, 4)}</pre> */}
            <Show value={profileInputLens()} />
            <Show value={lastName} />
        </div>
    );
};
