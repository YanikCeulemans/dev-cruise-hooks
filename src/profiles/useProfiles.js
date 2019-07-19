import { useState, useEffect } from 'react';

import * as profileApi from '../api/profileApi';

export default function() {
    const [profiles, setProfiles] = useState(null);
    useEffect(() => {
        profileApi.getAll().then(setProfiles);
    }, []);

    return profiles;
}