import React, { useState } from 'react';

const Greeting = () => {
  const [name, setName] = useState('Amneesh');

  const handleChangeName = () => {
    setName('Welcome to React!');
  };

  return (
    <div>
      <h1>Hello, {name}!</h1>
      <button onClick={handleChangeName}>Change Greeting</button>
    </div>
  );
};

export default Greeting;
