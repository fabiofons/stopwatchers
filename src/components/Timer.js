import React from 'react';
import store from '../store';

class Timer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      timerOn: false,
      timerStart: 0,
      timerTime: props.timer.timerTime
    }
    
    this.startTimer = this.startTimer.bind(this);
    this.stopTimer = this.stopTimer.bind(this);
    this.deleteStopWatch = this.deleteStopWatch.bind(this);
    this.updateStopWatch = this.updateStopWatch.bind(this);
  }
  
  render() {
    return (
      <div>
        <h1 className='timer'>{this.millisecondsToHuman(this.state.timerTime)}</h1>
        <div className='options'>
          <span className='red' onClick={this.deleteStopWatch}>Delete</span>
          <span className='yellow' onClick={this.updateStopWatch}>Update</span>
        </div>
        {this.state.timerOn === false ? 
        <div className='button green' onClick={this.startTimer}>
          Start
        </div> :
        <div className='button red' onClick={this.stopTimer}>
          Stop
        </div>}
      </div>
    )
  }

  millisecondsToHuman(ms) {
    const seconds = Math.floor((ms / 1000) % 60);
    const minutes = Math.floor((ms / 1000 / 60) % 60);
    const hours = Math.floor(ms / 1000 / 60 / 60);

    const humanized = [
      this.pad(hours.toString(), 2),
      this.pad(minutes.toString(), 2),
      this.pad(seconds.toString(), 2),
    ].join(':');

    return humanized;
  }

  pad(numberString, size) {
    let padded = numberString;
    while (padded.length < size) padded = `0${padded}`;
    return padded;
  }

  startTimer(e) {
    e.preventDefault();
    this.setState({
      timerOn: true,
      timerTime: this.state.timerTime,
      timerStart: Date.now() - this.state.timerTime
    });
    this.timer = setInterval(() => {
      this.setState({
        timerTime: Date.now() - this.state.timerStart
      });
    }, 1000);
  };

  stopTimer(e) {
    e.preventDefault();
    this.setState({
      timerOn: false
    });

    clearTimeout(this.timer);

    store.dispatch({
      type:'SYNC_TIMER',
      payload: {
        ...this.props.timer,
        timerTime: this.state.timerTime
      }      
    });    
  }
  
  componentWillUnmount() {
    clearTimeout(this.timer);
  }

  deleteStopWatch() {    
    store.dispatch({
      type:'DELETE',
      payload: {
        ...this.props.timer
      }
    })
  }

  updateStopWatch() {
    store.dispatch({
      type: 'TOGGLE_UPDATE',
      payload: {
        ...this.props.timer,
        timerTime: this.state.timerTime,
      }
    })
  }
}

export default Timer;

