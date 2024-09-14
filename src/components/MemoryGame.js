import React, { useState, useEffect } from 'react';
import '../styles/MemoryGame.css';
import InstructionImage from './InstructionImage';
const cardsArray = [
  { id: 1, name: 'Tú', matched: false },
  { id: 2, name: '🍌', matched: false },
  { id: 3, name: '🍇', matched: false },
  { id: 4, name: '🍓', matched: false },
  { id: 1, name: 'Yo', matched: false },
  { id: 2, name: '🍌', matched: false },
  { id: 3, name: '🍇', matched: false },
  { id: 4, name: '🍓', matched: false },
];

const shuffleArray = (array) => {
  return array.sort(() => Math.random() - 0.5);
};

const MemoryGame = ({ onNext }) => {
  const [cards, setCards] = useState(shuffleArray([...cardsArray]));
  const [flippedCards, setFlippedCards] = useState([]);
  const [matchedPairs, setMatchedPairs] = useState([]);
  const [showHeart, setShowHeart] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  console.log(setCards)
  const handleFlip = (index) => {
    if (flippedCards.length === 2 || flippedCards.includes(index)) return;

    const newFlipped = [...flippedCards, index];
    setFlippedCards(newFlipped);

    if (newFlipped.length === 2) {
      const [firstIndex, secondIndex] = newFlipped;
      if (cards[firstIndex].id === cards[secondIndex].id) {
        // Si las cartas coinciden y son "Tú" y "Yo", mostramos el corazón
        if (
          (cards[firstIndex].name === 'Tú' && cards[secondIndex].name === 'Yo') ||
          (cards[firstIndex].name === 'Yo' && cards[secondIndex].name === 'Tú')
        ) {
          setShowHeart(true);
          setTimeout(() => setShowHeart(false), 1500); // Muestra el corazón durante 1.5 segundos
        }
        setMatchedPairs([...matchedPairs, cards[firstIndex].id]);
      }
      setTimeout(() => setFlippedCards([]), 1000); // Voltea las cartas de nuevo después de 1 segundo
    }
  };

  const isFlipped = (index) => {
    return flippedCards.includes(index) || matchedPairs.includes(cards[index].id);
  };

  // Verificar si el juego ha terminado
  useEffect(() => {
    if (matchedPairs.length === cardsArray.length / 2) {
      setGameOver(true);
    }
  }, [matchedPairs]);

  return (
    <div className="memory-game">
      <InstructionImage
        instructions='Encuentra las cosas que deberian estar juntas'
      />

      {showHeart && <div className="heart">❤️</div>} {/* Muestra el corazón */}

      {!gameOver ? (
        <div className="cards-grid">
          {cards.map((card, index) => (
            <div
              key={index}
              className={`card ${isFlipped(index) ? 'flipped' : ''}`}
              onClick={() => handleFlip(index)}
            >
              <div className="card-inner">
                <div className="card-front">❓</div>
                <div className="card-back">{card.name}</div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="game-over-message">
          <p>Obviamente Nosotros ❤️</p>
          <button className="next" onClick={onNext}>Siguiente</button> {/* Botón Siguiente */}
        </div>
      )}
    </div>
  );
};

export default MemoryGame;
