import React from 'react';

export default function(props) {
    return (
        <pre>{JSON.stringify(props.value, null, 4)}</pre>
    );
}
