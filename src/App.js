import React from 'react';
import Space from './space/Space';
import Header from './header/Header';
import styles from './App.module.scss';

function App() {
  return (
    <div className={styles['App']}>
      <Header />
      <Space />
    </div>
  );
}

export default App;
