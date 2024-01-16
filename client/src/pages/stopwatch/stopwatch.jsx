import React, { useState, useEffect } from 'react';
import styles from './stopwatch.module.scss'

const Stopwatch = () => {
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval;

    if (isActive) {
      interval = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds + 1);
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [isActive]);

  const handleStartStop = () => {
    setIsActive((prevIsActive) => !prevIsActive);
  };

  const handleReset = () => {
    setSeconds(0);
    setIsActive(false);
  };

  return (
    <div className={styles.stopwatchContainer}>
      <div>{seconds}s</div>
      <div>
        <button onClick={handleStartStop}>{isActive ? 'Stop' : 'Start'}</button>
        <button onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
};

export default Stopwatch;
