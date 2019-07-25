import React from 'react';

import styles from './row.module.css';

export default function(props) {
  const classNames = [styles.row, props.className].filter(x => x).join(' ');
  return <div className={classNames}>{props.children}</div>;
}
