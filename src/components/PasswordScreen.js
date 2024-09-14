import React, { useState } from 'react';
import '../styles/PasswordScreen.css'; // Ajusta la importación según tu estructura de estilos
import InstructionImage from './InstructionImage';

const PasswordScreen = () => {
  const [password, setPassword] = useState('');
  const [showForm, setShowForm] = useState(true);
  const [showMessage, setShowMessage] = useState(false);
  const [error, setError] = useState(''); // Estado para el mensaje de error

  const handleSubmit = (e) => {
    e.preventDefault();

    // Verificar la contraseña
    if (password === '14052024') {
      setShowForm(false); // Ocultar el formulario después de enviar la contraseña correcta
      setShowMessage(true); // Mostrar el mensaje bonito
      setError(''); // Limpiar el mensaje de error
    } else {
      setError('Contraseña incorrecta. Intenta de nuevo.'); // Mostrar mensaje de error
    }
  };

  return (
    <div className="password-screen">
      {/* Solo mostrar las instrucciones si el mensaje bonito no se ha mostrado */}
      {!showMessage && (
        <InstructionImage
          instructions="Te doy una pista, es una fecha especial"
        />
      )}

      {showForm && (
        <form onSubmit={handleSubmit}>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Contraseña"
            required
          />
          <button type="submit">Ok</button>
          {/* Mostrar mensaje de error si hay alguno */}
          {error && <p className="error-message">{error}</p>}
        </form>
      )}

      {showMessage && (
        <div className="beautiful-message">
          <h2>Love U!</h2>
          <p>Gracias por estos meses juntos, ¡Vamos por más!</p>
        </div>
      )}
    </div>
  );
};

export default PasswordScreen;
