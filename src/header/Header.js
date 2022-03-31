import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './Header.module.scss';

const INITIAL_TIME = 3 * 10;
let intervalHandle;
let timeoutHandle;

const Header = ({ gameOn, setGameOn }) => {
  const [time, setTime] = useState(INITIAL_TIME);

  useEffect(() => {
    return () => {
      clearTimeout(timeoutHandle);
      clearInterval(intervalHandle);
    };
  }, []);

  //  const deductTimer = () => setTime((time) => time - 1);

  const onStartClicked = () => {
    setGameOn(true);
    setTime(INITIAL_TIME);
    intervalHandle = setInterval(() => setTime((time) => time - 1), 100);
    timeoutHandle = setTimeout(() => {
      clearTimeout(intervalHandle);
      setGameOn(false);
    }, INITIAL_TIME * 100);
  };

  return (
    <div className={styles['header']}>
      <div className={styles['start']}>
        <button
          onClick={onStartClicked}
          className={styles['start-btn']}
          disabled={gameOn}
        >
          Start
        </button>
      </div>

      <div className={styles['title']}>
        <span className={styles['title-txt']}>Kaboom</span>
      </div>

      <div className={styles['timer']}>
        <span data-testid="timer-txt" className={styles['timer-txt']}>
          {(time * 0.1).toFixed(1)}
        </span>
      </div>
    </div>
  );
};

Header.propTypes = {
  gameOn: PropTypes.bool.isRequired,
  setGameOn: PropTypes.func.isRequired
};

export default Header;

/*
Alternative way to implement the timer:

useEffect(() => {
  if (!gameOn) {
    return;
  }
  if (time <= 0) {
    return setGameOn(false);
  }
  timerHandle = setTimeout(() => {
    setTime((time) => time - 1);
  }, 100);
}, [time, gameOn]);
*/
