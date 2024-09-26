// src/components/Login.jsx
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/usuarios.json');
      const data = await response.json();
      const user = data.users.find(u => u.username === username && u.password === password);
      if (user) {
        localStorage.setItem('usuario', username);
        history.push('/');
      } else {
        alert('Usuario o contraseña incorrectos');
      }
    } catch (error) {
      console.error('Error al cargar usuarios:', error);
    }
  };

  return (
    <form id="loginForm" onSubmit={handleLogin}>
      <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Usuario" required />
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Contraseña" required />
      <button type="submit">Ingresar</button>
    </form>
  );
};

export default Login;
