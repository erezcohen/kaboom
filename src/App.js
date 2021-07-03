import React, { useState } from 'react';
import Space from './space/Space';
import Header from './header/Header';
import styles from './App.module.scss';

function App() {
  const [gameOn, setGameOn] = useState(false);

  return (
    <div className={styles['App']}>
      <Header gameOn={gameOn} setGameOn={setGameOn} />
      <Space gameOn={gameOn} />
    </div>
  );
}

export default App;
