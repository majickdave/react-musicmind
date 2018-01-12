import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    var fontStyle = {"font-size": "4em",}
    return (
      <div className="App">
        <header className="App-header">
          <h1 style={fontStyle}><span role="img" aria-labelledby="musicmind"> 😎 | 🚧 </span></h1>

        </header>
        <h1 className="App-title">MusicMind is Currently Under Construction</h1>
        <p className="App-intro">
          Please check back soon.
        </p>
      </div>
    );
  }
}

export default App;
