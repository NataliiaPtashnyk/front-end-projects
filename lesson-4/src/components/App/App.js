import './App.css';
import Task4 from '../Task 4/index';
import React from 'react';


class App extends React.Component {
  state={
    isShown: true
  }
  render(){
    return (
      <div className="App">
        <button onClick={() => this.setState({ isShown: !this.state.isShown})}> Seen / hidden </button>
        {this.state.isShown && <Task4/>}
      </div>
    );
  }
}

export default App;
