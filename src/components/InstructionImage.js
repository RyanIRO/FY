import React from 'react';
import '../styles/InstructionImage.css';

const InstructionImage = ({ instructions }) => {
  return (
    <div className="instruction-container">
      <img src='/images/images.png' alt="Instrucciones" className="instruction-image" />
      <div className="instruction-text">
        <h2>💖</h2>
        <p>{instructions}</p>
      </div>
    </div>
  );
};

export default InstructionImage;
