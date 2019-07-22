import React from 'react';

export default function(props) {
  return (
    <div
      className="avatar"
      style={{
        backgroundImage: `url(/${props.url})`,
      }}
    />
  );
}
