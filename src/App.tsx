import React from 'react';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Cette application est basée sur <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            XIV API
          </a>.
          <br/>
          Utilisez le formulaire de recherche ci-dessous afin d'obtenir des résultats issus de la base de données de FFXIV.
        </p>
      </header>
    </div>
  );
}

export default App;
