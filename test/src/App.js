import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FfxivApiResults from './components/ffxivApiResults';

class App extends Component {
  state = {
    ffxivApiResults: []
  }

  handleChange(event) {
    let url = '';
    url += 'https://xivapi.com/search?string=';
    url += event.target.value.replace(/ /g, '+');
    url += '&language=fr';
    url += '&private_key=';
    url += '626567fb7cc14633bcd12bb537187597424f9176280348a0a946fe9730fe4adf';
    fetch(url)
      .then(res => res.json())
      .then((data) =>{
        this.setState({ ffxivApiResults: data })
      })
      .catch(console.log)
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="Logo-container">
            <img src={logo} className="App-logo" alt="logo" />
            <img src="https://static.wixstatic.com/media/92c60d_9556cc8a09654027b6afb62fae9357d0.png/v1/fill/w_153,h_153,al_c,q_80,usm_0.66_1.00_0.01/92c60d_9556cc8a09654027b6afb62fae9357d0.webp"
              className="App-logo" alt="logo-ff" />
            </div>
          <p>
            Cette application s'appuie sur le travail de <a href="">XIV API</a>.
          </p>
        </header>
        <form className="Custom-form">
          <label>Recherche :
            <input onChange={this.handleChange} className="Custom-label" />
          </label>
        </form>
        <br/>
        <div className="Results-container">
          <FfxivApiResults ffxivApiResults={this.state.ffxivApiResults} />
        </div>
      </div>
    );
  }
}

export default App;
