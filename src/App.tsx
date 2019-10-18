import React from 'react';
import './App.css';
import logo from './logo.svg';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <div className="Logo-container">
            <img src={logo} alt="logo" />
            <img src="https://static.wixstatic.com/media/92c60d_9556cc8a09654027b6afb62fae9357d0.png/v1/fill/w_153,h_153,al_c,q_80,usm_0.66_1.00_0.01/92c60d_9556cc8a09654027b6afb62fae9357d0.webp"
              className="App-logo" alt="logo-ff" />
            </div>
          <p>
            Cette application s'appuie sur le travail de <a href="https://xivapi.com/">XIV API</a>.
          </p>
      </header>
    </div>
  );
}

export default App;
