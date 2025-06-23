import React, { useState, useEffect } from 'react';

function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [storedData, setStoredData] = useState([]);

  useEffect(() => {
    const saved = localStorage.getItem('loginData');
    if (saved) {
      setStoredData(JSON.parse(saved));
    }
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    const newEntry = { username, password };
    const updatedData = [...storedData, newEntry];
    localStorage.setItem('loginData', JSON.stringify(updatedData));
    setStoredData(updatedData);
    setUsername('');
    setPassword('');
  };

  return (
    <div className="main-container">
      <div className="login-box">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"
          alt="Instagram"
          className="logo"
        />

        <form onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="Enter your mobile number, username or email"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />

          <div className="password-wrapper">
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <span
              className="toggle-password"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? '🙈' : '👁️'}
            </span>
          </div>

          <button type="submit" className="login-btn">
            Log in
          </button>
        </form>

        <a href="#" className="forgot-link">Forgot password?</a>

        <div className="fb-login">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/1/1b/Facebook_icon.svg"
            alt="Facebook"
          />
          <a href="#">Log in with Facebook</a>
        </div>

        <div className="divider">
          <span></span> OR <span></span>
        </div>

        <a href="#" className="signup-link">Create new account</a>

        {/* Stored Data */}
        <div className="stored-data">
          <h3>Stored Login Data:</h3>
          {storedData.length === 0 ? (
            <p>No data yet.</p>
          ) : (
            <ul>
              {storedData.map((entry, index) => (
                <li key={index}>
                  {entry.username} | {entry.password}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
           