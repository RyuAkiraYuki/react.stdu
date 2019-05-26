import React, { Component } from 'react';
import PlayerAreas from './components/PlayerAreas';
import LreElements from './data_ish/lreElements';
import './App.scss';

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
          <div className="theme-editor-title">Lre Player Theme Builder</div>
          <div className="tools-area">
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
