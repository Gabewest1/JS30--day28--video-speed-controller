import React, { Component } from 'react';

class App extends Component {
  state = {
    playbackRate: 1,
    height: "16.3%"
  }
  render() {
    const { playbackRate, height } = this.state
    const speedBarStyle = { height }

    return (
      <div className="wrapper">
        <div className="video-wrapper">
          <video src="The Bourne Ultimatum - Trailer.mp4" ref={video => this.video = video} loop controls></video>
        </div>
        <div 
          className="speed"
          ref={speedBar => this.speedBar = speedBar}
          onMouseDown={this._onMouseDown}
          onMouseUp={this._onMouseUp}
          onMouseMove={this._onMouseMove}
          onMouseLeave={() => this.setState({ isMouseDown: false })}
        >
          <div 
            className="speed-bar"
            style={speedBarStyle}
          >{playbackRate}×</div>
        </div>
      </div>
    )
  }
  _onMouseDown = (e) => {
    this._getPositionAndSetVolume(e)
    this.setState({ isMouseDown: true })
  }

  _onMouseUp = () => {
    this.setState({ isMouseDown: false })
  }

  _onMouseMove = (e) => {
    if (this.state.isMouseDown) {
      this._getPositionAndSetVolume(e)
    }
  }

  _getPositionAndSetVolume = (e) => {
    const speedBarHeight = parseInt(getComputedStyle(this.speedBar).height)
    const yPosition = e.pageY - this.speedBar.offsetTop

    const percentage = (yPosition / speedBarHeight)

    const minVolume = .4
    const maxVolume = 4

    const height = percentage * 100 + "%"
    const playbackRate =  
      (percentage * (maxVolume - minVolume) + minVolume).toFixed(2)

    this.video.playbackRate = playbackRate
    console.log(percentage, playbackRate)
    this.setState({ height, playbackRate })
  }
}

export default App;
