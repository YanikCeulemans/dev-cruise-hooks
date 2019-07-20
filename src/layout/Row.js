import React from 'react';

import styles from './row.module.css';

export default function(props) {
  return <div className={styles.row}>{props.children}</div>;
}
