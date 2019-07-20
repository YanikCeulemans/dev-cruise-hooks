import React from 'react';

export default function(props) {
  return <pre className="box">{JSON.stringify(props.value, null, 4)}</pre>;
}
