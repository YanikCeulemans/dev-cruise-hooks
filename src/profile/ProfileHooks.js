import React, { useState } from 'react';

import './Profile.css';
import useProfile from './useProfile';
import Show from '../helpers/Show';

export default function(props) {
    // const [lastName, setLastName] = useState('Ceulemans');
    const profileCtx = useProfile(props.id);
    if (!profileCtx.profile) return (<h1>Loading...</h1>);
    return (
        <div className="profile">
            <div className="avatar" style={{backgroundImage: `url(/${profileCtx.inputProps('avatarUrl').value})`}}></div>
            <input className="profile-input" type="text" {...profileCtx.inputProps('firstName')} />
            <input className="profile-input" type="text" {...profileCtx.inputProps('lastName')} />
            <input className="profile-input" type="number" {...profileCtx.inputProps('age', Number)} />
            <input className="profile-input" type="text" {...profileCtx.inputProps('gender')} />
            {/* <pre>{JSON.stringify(profileInputLens(), null, 4)}</pre> */}
            <Show value={profileCtx.profile} />
            {/* <Show value={lastName} /> */}
        </div>
    );
};
