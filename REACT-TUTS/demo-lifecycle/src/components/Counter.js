import React, { Component } from 'react';

class Counter extends Component {

    constructor(props) {
        console.log('counter constructor')
        super(props);
        this.state={
            count: 0
        };
        this.increase = this.increase.bind(this);
        this.decrease = this.decrease.bind(this);
    }

    increase() {
        this.setState({
            count: this.state.count + 1
        });
    }

    decrease() {
        this.setState({
            count: this.state.count - 1
        });
    }

    render() {
        console.log('counter render');
        return (
            <div className='Counter'>
                <button onClick={this.decrease} >-</button>
                <span>{this.state.count}</span>
                <button onClick={this.increase} >+</button>
            </div>
        )
    }

    componentDidMount(){
        console.log('counter did mount')
    }

    componentDidUpdate(){
        console.log('counter dit update')
    }

    componentWillUnmount(){
        console.log(' counter will unmount')
    }

    shouldComponentUpdate(nextProps,nextState){
        if(this.state.count === nextState.count){
            return false;
        }
        return true; 
    }
    // mac dinh la true nen moi lan app render thi cac component duoc render tu dong theo 
    // tuy nhien khi component khong co gi thay doi state thi render lai gay lag ma thoi
}

export default Counter;