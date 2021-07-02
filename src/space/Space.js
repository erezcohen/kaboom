import React from 'react';
import styles from './Space.module.scss';

const initialLength = 150;
const initialLocation = 50;

const boxStyle = {
  width: initialLength + 'px',
  height: initialLength + 'px',
  left: initialLocation + '%',
  top: initialLocation + '%'
};

const Space = () => {
  return (
    <div className={styles['space']}>
      <div className={styles['box']} style={boxStyle} data-testid="box" />
    </div>
  );
};

export default Space;
