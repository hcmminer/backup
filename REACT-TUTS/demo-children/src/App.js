import React, { Component } from 'react';
import './App.css';
import Accordion from './components/Accordion.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Accordion heading='Heading'>
          asjdfasdhgfhaghfa
        </Accordion>
      </div>
    );
  };
}

export default App;
