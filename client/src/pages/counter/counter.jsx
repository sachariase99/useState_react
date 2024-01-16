import React, { useState } from 'react';
import styles from './counter.module.scss'

const Counter = () => {
  const [Clicks, setClicks] = useState(0);

  const handleButtonClick = () => {
    setClicks(Clicks + 1);
  };

  return (
    <div className={styles.counter}>
      <p>Du har klikket på knappen {Clicks} antal gange.</p>

      <button onClick={handleButtonClick}>Klik mig!</button>
    </div>
  );
};

export default Counter;
