import React, { useState, useEffect } from 'react';
import '../styles/NextAnimation.css';
import InstructionImage from './InstructionImage';

const flowerTypes = ['🌻', '🌹', '🌼', '🌷', '💐', '🌸', '🌺']; // Lista de tipos de flores

const NextAnimation = ({ onNext }) => {
  const [flowers, setFlowers] = useState([]);
  const [showButton, setShowButton] = useState(false);
  const [showMessage, setShowMessage] = useState(false); // Estado para el mensaje bonito
  const [showNextButton, setShowNextButton] = useState(false); // Estado para el botón "Siguiente"

  const handleClick = (e) => {
    if (showMessage) return;

    const newFlower = {
      type: flowerTypes[Math.floor(Math.random() * flowerTypes.length)], // Selección aleatoria de flor
      x: e.clientX, // Posición X del clic
      y: e.clientY  // Posición Y del clic
    };

    setFlowers((prevFlowers) => [...prevFlowers, newFlower]); // Añadir la nueva flor al array
  };

  // Mostrar el botón después de 5 segundos
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowButton(true);
    }, 5000);

    return () => clearTimeout(timer); // Limpiar el temporizador al desmontar el componente
  }, []);

  // Función para mostrar el mensaje bonito
  const handleButtonClick = () => {
    setShowMessage(true); // Cambia el estado para mostrar el mensaje bonito
    setShowButton(false); // Esconder el botón "Presióname"
    setTimeout(() => setShowNextButton(true), 3000); // Mostrar el botón "Siguiente" después de 3 segundos
  };

  return (
    <div className="next-animation" onClick={handleClick}>
      {/* Solo mostrar las instrucciones si el mensaje bonito no se ha mostrado */}
      {!showMessage && (
        <InstructionImage
          instructions="Llena la pantalla de flores presionándola"
        />
      )}

      <div className="flowers-container">
        {flowers.map((flower, index) => (
          <span
            key={index}
            className="flower"
            style={{
              left: `${flower.x}px`,
              top: `${flower.y}px`,
              position: 'absolute', // Asegurarse de que las flores se posicionen correctamente
            }}
          >
            {flower.type}
          </span>
        ))}
      </div>

      {/* Muestra el botón si showButton es verdadero */}
      {showButton && !showMessage && (
        <div className="button-container">
          <button className="press-me-button" onClick={handleButtonClick}>
            Presióname
          </button>
        </div>
      )}

      {/* Muestra el mensaje bonito si showMessage es verdadero */}
      {showMessage && (
        <div className="beautiful-message">
          <img className='shrek' src='/images/shrek.jpg' alt='shrek'/>
          <h2>y bueno en realidad a mi no me gusta pero creí que a ti te gustaría porque tu si eres bonita</h2>
          <p>❤️</p>
        </div>
      )}

      {/* Muestra el botón "Siguiente" después de mostrar el mensaje bonito */}
      {showNextButton && (
        <div className="button-container">
          <button className="next-button" onClick={onNext}>
            Press Me
          </button>
        </div>
      )}
    </div>
  );
};

export default NextAnimation;
