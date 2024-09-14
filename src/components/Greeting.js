import React from 'react';
import '../styles/Greeting.css';
import InstructionImage from './InstructionImage';
const Greeting = ({ name, onStart }) => {
  return (
    <div className="greeting-container">
      <h1 className="greeting-text">Hello, {name}!</h1>
      <InstructionImage
      instructions='Comencemos! presiona el botón para continuar'
      />
      <button className="start-button" onClick={onStart}>Press Me</button>
    </div>
  );
};

export default Greeting;
