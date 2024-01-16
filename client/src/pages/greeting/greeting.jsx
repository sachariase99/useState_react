import React, { useState } from 'react';
import styles from './greeting.module.scss'

const Greeting = () => {
  const [name, setName] = useState('');
  const [greeting, setGreeting] = useState('Send en hilsen til ');

  const handleInputChange = (event) => {
    setName(event.target.value);
  };

  return (
    <div className={styles.greeting}>
      <p>{greeting}{name}</p>

      <input
        type="text"
        placeholder="Indtast navn"
        value={name}
        onChange={handleInputChange}
      />
    </div>
  );
};

export default Greeting;
