import React, { useState } from 'react';

export default function LoginComponent() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  function handleLogin() {
    setIsLoggedIn(true);
  }

  function handleLogout() {
    setIsLoggedIn(false);
  }
  return (
    <div>
      {isLoggedIn ? (
        <div>
          <h1>Selamat datang!</h1>
          <button type='button' onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <div>
          <h1>Silakan login</h1>
          <button type='button' onClick={handleLogin}>Login</button>
        </div>
      )}
    </div>
  );
}
