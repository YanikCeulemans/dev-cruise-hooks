import { useEffect, useState } from 'react';

import * as history from '../helpers/history';

export default function() {
    const [url, setUrl] = useState(history.getCurrentLocation());
    useEffect(() => {
        return history.listen(setUrl);
    }, []);
    return url;
}