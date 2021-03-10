import React, { Component } from "react";

export default class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 0
        };

        this.increase = this.increase.bind(this);
    }

    increase() {
        this.setState(state => {
            return {
                value: state.value + 1
            };
        });
        this.setState(state => {
            return {
                value: state.value + 1
            };
        });
        // this.setState({ value: this.state.value + 1 });
    }

    render() {
        return (
            <div>
                <h2>{this.state.value}</h2>
                <button onClick={this.increase}>Increase</button>
            </div>
        );
    }
}
