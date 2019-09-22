import React from 'react';

export default function Button(props) {
  return (
    <button className="box with-hover" {...props}>
      {props.children}
    </button>
  )
}