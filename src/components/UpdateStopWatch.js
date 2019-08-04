import React from 'react';
import store from '../store'

class UpdateStopWatch extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: props.values.title,
      project: props.values.project,
      updateInfo: props.values.updateInfo
    }
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
          <div className='button half blue' onClick={this.updateInfo}>Update</div>
          <div className='button half red' onClick={this.cancelUpdate}>Cancel</div>
        </div>
      </form>
    );
  };

  onChangeT = (e) => {
    this.setState({
      title: e.target.value
    });
  };
  
  onChangeP = (e) => {
    this.setState({
      project: e.target.value
    })
  };
  
  updateInfo = (e) => {
    e.preventDefault();
    store.dispatch({
      type:'UPDATE_STOPWATCH',
      payload: {
        id: this.props.values.id,
        title: this.state.title,
        project: this.state.project,
      }
    });
  };

  cancelUpdate = (e) => {
    e.preventDefault();
    store.dispatch({
      type:'CANCEL_UPDATE',
      payload: {
        id: this.props.values.id
      }
    })
  }

}



export default UpdateStopWatch;