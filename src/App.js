import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div class="wrapper">
        <div>
          <video class="flex" width="765" src="The Bourne Ultimatum - Trailer.mp4" loop controls></video>
        </div>
        <div class="speed">
          <div class="speed-bar">1×</div>
        </div>
      </div>
    )
  }
}

export default App;
