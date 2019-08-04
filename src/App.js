import React from 'react';
import './App.css';
import NewStopWatch from './components/NewStopWatch';
import Timer from './components/Timer'
import UpdateStopWatch from './components/UpdateStopWatch';
import store from './store';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      timers: [{id: 0, title: 'Primer cronómetro', project: 'Makeitreal', timerTime: 475003, updateInfo: false }],
      isAddTimerActive: false,
    }

    store.subscribe(() => {
      this.setState({
        timers: store.getState().timers
      })
    });
  }

  render() {
    return (
      <div>
        <div className='header'>Timers</div>
        {this.state.timers.map((t) => {
          return (!t.updateInfo ? 
            <div className='frame' key={t.id}>
              <div className='title'>{t.title}</div>
              <span className= "subtitle">{t.project}</span>
              <Timer timer={t} key={t.id} />
            </div> :
            <div className='frame' key={t.id}>
              < UpdateStopWatch values={t}  />
            </div>
          )
        }
        )}
        {this.state.isAddTimerActive && (
          <div className='frame'>
            < NewStopWatch onToggleAddTimer={this.onToggleAddTimer} />
          </div>
        )}
        {!this.state.isAddTimerActive && (
          <div className="add" onClick={this.onToggleAddTimer}>
            +
          </div>
        )}
      </div>
    );
  }

  onToggleAddTimer = () => {
    this.setState((state) => ({
      isAddTimerActive: !state.isAddTimerActive
    }));
  }
}

export default App;
