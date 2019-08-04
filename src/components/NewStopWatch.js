import React from 'react';
import uniqueId from 'react-html-id';
import store from '../store';


class NewStopWatch extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      title: "",
      project: ""
    }

    uniqueId.enableUniqueIds(this);

  }

  render() {
    return (
      <form>
        <div>
          <label>Title</label>
          <input placeholder='Title' value={this.state.title} onChange={this.onChangeT}/>
          <label>Proyecto</label>
          <input placeholder='Proyecto' value={this.state.project} onChange={this.onChangeP}/>
        </div>
        <div className='buttons'>
          <div className='button half blue' onClick={this.createInfo}>Create</div>
          <div className='button half red' onClick={this.props.onToggleAddTimer}>Cancel</div>
        </div>
      </form>
    )
  }

  onChangeT = (e) => {
    this.setState({
      title: e.target.value
    })
  }
  
  onChangeP = (e) => {
    this.setState({
      project: e.target.value
    })
  }

  createInfo = (e) => {
    e.preventDefault();

    store.dispatch({
      type:'NEW_STOPWATCH',
      payload: {
        id: this.nextUniqueId(),
        title: this.state.title,
        project: this.state.project,
        timerTime: 0,
        updateInfo: false
      }
    });

    this.props.onToggleAddTimer();

    this.setState({
      title: '',
      project: ''
    });
  }

} 

export default NewStopWatch;
