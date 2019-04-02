import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Title from './components/Title'
import Scoreboard from './components/Scoreboard'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Title content='Scoreboard'/>
        </header>
        <main>
          <Scoreboard />
        </main>
      </div>
    );
  }
}

export default App;
