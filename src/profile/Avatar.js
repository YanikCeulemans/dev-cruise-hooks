import React from 'react';
import './Avatar.css';

export default function(props) {
    return (
        <div className="avatar">
            {props.children}
        </div>
    );
};