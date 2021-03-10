import React, { Component } from 'react';
import './App.css';
import TodoItem from './components/TodoItem';
import Tick from './img/tick.svg';

class App extends Component {
  constructor() {
    super();
    this.state = {
      newItem: '',
      TodoItems: [
        { title: "anh nho truc", isComplete: false },
        { title: "anh nho em nguoi oi", isComplete: false },
        { title: "anh nho thuong", isComplete: false }
      ],
    };

    this.onKeyDown = this.onKeyDown.bind(this);
    this.onChange = this.onChange.bind(this)
  }

  onItemClicked(item) {

    return (event) => {
      const isComplete = item.isComplete;
      const { TodoItems } = this.state;
      const index = TodoItems.indexOf(item);
      this.setState({
        TodoItems: [
          ...TodoItems.slice(0, index),
          { ...item, isComplete: !isComplete },
          ...TodoItems.slice(index + 1)
        ]
      })

    };
  }

  onKeyDown(event) {
    if (event.keyCode === 13) {// enter key
      let text = event.target.value;
      if (!text) {
        return;
      }
      text = text.trim();// xoa di cac khoang trang
      if (!text) {
        return;
      }
      this.setState({
        newItem: '',
        TodoItems: [
          { title: text, isComplete: false },
          ...this.state.TodoItems
        ]
      });
    }
  }

  onChange(event) {
    this.setState({
      newItem: event.target.value
    })
  }

  render() {
    const { TodoItems, newItem } = this.state;
    if (TodoItems.length > 0) {
      return (
        <div className="App">

          <div className='Header'>
            <img src={Tick} />
            <input
              type='text'
              placeholder='Add a new item'
              value={newItem}
              onKeyDown={this.onKeyDown}
              onChange={this.onChange}
            />
          </div>

          {TodoItems.length && TodoItems.map((item, index) => (
            <TodoItem
              key={index}
              item={item}
              onClick={this.onItemClicked(item)}
            />
          ))}

        </div>
      )
    } else {
      return (
        <div className="App">Nothing here</div>
      )
    }
  }
}

export default App;