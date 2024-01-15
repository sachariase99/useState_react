import React, { useState } from 'react';

const Greeting = () => {
  const [navn, setNavn] = useState('');
  const [hilsen, setHilsen] = useState('Send en hilsen til ');

  const handleInputChange = (event) => {
    setNavn(event.target.value);
  };

  return (
    <div>
      <p>{hilsen}{navn}</p>

      <input
        type="text"
        placeholder="Indtast navn"
        value={navn}
        onChange={handleInputChange}
      />
    </div>
  );
};

export default Greeting;
