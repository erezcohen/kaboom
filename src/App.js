import React from 'react';
import Space from './Space';
import Header from './Header';
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
