import { useState } from 'react';

export default function() {
    const [profile, setProfile] = useState({
        avatarUrl: 'profile_yanik.jpg',
        firstName: 'Yanik',
        lastName: 'Ceulemans',
        age: 28,
    });

    return (propName) => {
        if (!propName) {
            return {
                value: profile,
                onChange: setProfile,
            }
        }
        return {
            value: profile[propName],
            onChange: e => setProfile({
                ...profile,
                [propName]: e.target.value,
            }),
        };
    }
}
