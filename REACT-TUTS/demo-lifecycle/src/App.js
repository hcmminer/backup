import './App.css';
import Counter from './components/Counter';
import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showcouter: true
    };
  }

  componentDidUpdate() {
    console.log('App updated');
  }

  removeCounter() {
    this.setState({
      showcouter: false
    });
  }

  render() {
    console.log('App render');
    return (
      <div className="App">
        <button onClick={() => this.removeCounter()}>
          Remove Counter
        </button>
        {this.state.showcouter && <Counter />}
      </div>
    );
  }
}

export default App;
