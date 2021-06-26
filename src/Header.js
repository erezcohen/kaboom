import React, { useState, useEffect } from 'react';
import styles from './Header.module.scss';

let timerHandle;
const INITIAL_TIME = 3 * 10;

const Header = () => {
  const [gameOn, setGameOn] = useState(false);
  const [time, setTime] = useState(INITIAL_TIME);

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

  useEffect(() => {
    return () => clearTimeout(timerHandle);
  }, []);

  const onStartClicked = () => {
    setGameOn(true);
    setTime(INITIAL_TIME);
  };

  return (
    <div className={styles['header']}>
      <div className={styles['start']}>
        <button onClick={onStartClicked} className={styles['start-btn']}>
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

export default Header;
