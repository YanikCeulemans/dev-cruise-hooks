import { useState, useEffect } from 'react';

import * as profileApi from './profileApi';

export default function(id) {
    const [profile, setProfile] = useState(null);
    useEffect(() => {
        profileApi.getById(id).then(setProfile);
    }, [id])


    return {
        profile,
        inputProps: (propName, transformer = x => x) => {
            return {
                value: profile[propName],
                onChange: e => setProfile({
                    ...profile,
                    [propName]: transformer(e.target.value),
                }),
            };
        }
    };
}
