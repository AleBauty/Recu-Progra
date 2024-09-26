import { useState, useEffect } from 'react' 

import { Link } from 'react-router-dom';

const Header = () => {
  const [user, setUser] = useState(localStorage.getItem('usuario') || '');

  const handleLogout = () => {
    localStorage.removeItem('usuario');
    setUser('');
  };

  return (
    <header>
      <div className="title">
        <h1 className="red-text logo-title">TRAILERFLIX</h1>
      </div>
      <div className="login-container">
        {user ? (
          <div id="userInfo">
            <span id="userNameDisplay">Bienvenido, {user}</span>
            <button id="logoutBtn" onClick={handleLogout}>Cerrar sesión</button>
          </div>
        ) : (
          <Link to="/login">Iniciar sesión</Link>
        )}
      </div>
    </header>
  );
};

export default Header;
