import React, { useState } from 'react';
import Greeting from './components/Greeting';
import MemoryGame from './components/MemoryGame';
import NextAnimation from './components/NextAnimation';
import PasswordScreen from './components/PasswordScreen'; // Importa el componente PasswordScreen

const App = () => {
  const [stage, setStage] = useState('greeting');

  const handleStart = () => {
    setStage('memoryGame');
  };

  const handleNext = () => {
    setStage('nextAnimation');
  };

  const handlePasswordScreen = () => {
    setStage('passwordScreen');
  };

  return (
    <div>
      {stage === 'greeting' && <Greeting onStart={handleStart} name="Teffi" />}
      {stage === 'memoryGame' && <MemoryGame onNext={handleNext} />}
      {stage === 'nextAnimation' && <NextAnimation onNext={handlePasswordScreen} />}
      {stage === 'passwordScreen' && <PasswordScreen onPasswordSubmit={handleNext} />}
    </div>
  );
};

export default App;
