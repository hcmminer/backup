import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TrafficLight from './components/TrasfficLight'

const RED = 0;
const ORANGE = 1;
const GREEN = 2;

class App extends Component {
  constructor() {
    super();
    this.state = { currentColor: RED };

    setInterval(() => {
      this.setState({ currentColor: this.getNextColor(this.state.currentColor) });
    }, 1000);
  }

  getNextColor(color) {
    switch (color) {
      case RED:
        return ORANGE;
      case ORANGE:
        return GREEN;
      default:
        return RED;
    }
  }

  render() {
    const { currentColor } = this.state;
    return (
      <div className="App">
        {/* như vậy thực thể TrafficLight đã điều khiển component tương ứng thông qua việc khai báo các thuộc tính  */}
        <TrafficLight currentColor={currentColor} />
      </div>
    );
  }

}

export default App;
