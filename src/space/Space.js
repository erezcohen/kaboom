import React from 'react';
import PropTypes from 'prop-types';
import styles from './Space.module.scss';

const INITIAL_LENGTH = 150;
const INITIAL_LOCATION = 50;

const Space = ({ gameOn }) => {
  const boxStyle = {
    width: INITIAL_LENGTH + 'px',
    height: INITIAL_LENGTH + 'px',
    //    left: INITIAL_LOCATION + '%',
    left: (gameOn ? 100 : INITIAL_LOCATION) + '%',
    top: INITIAL_LOCATION + '%',
    ...(gameOn && { transition: 'left 3s linear' })
  };

  return (
    <div className={styles['space']}>
      <div style={boxStyle} className={styles['box']} data-testid="box" />
    </div>
  );
};

Space.propTypes = {
  gameOn: PropTypes.bool.isRequired
};

export default Space;
