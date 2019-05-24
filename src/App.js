import React, { Component } from 'react';
import PlayerAreas from './components/PlayerAreas';
import LreElements from './data_ish/lreElements';
import './App.css';

let playerStructure = new LreElements();

class App extends Component {
  state = {
    lrePlayer: playerStructure.lrePlayer,
  }
  render() {
    console.log(this.state.pickers);
    console.log(this.state.lrePlayer);
    return (
      <div className="lre-theme-app">
        <div className="tool-box">
          <h1>Tool box here!</h1>
          <div className="tools">
            <PlayerAreas areas={this.state.lrePlayer} />
          </div>

        </div>


        <div className="player-preview">
          <div className="player-stage">
            <div id="ac-lre-player"></div>
          </div>

        </div>
      </div>
    );
  }
}

export default App;
