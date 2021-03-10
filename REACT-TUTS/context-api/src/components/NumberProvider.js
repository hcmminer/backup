import React, { Component } from "react";
import NumberContext from './../contexts/NumberContext';

export default class extends Component {

    constructor(props) {
        super(props);
        this.state = {
            number: 100
        }

        this.updateNumber = this.updateNumber.bind(this);
    }

    updateNumber() {
        this.setState({
            number: Math.random()
        });
    }

    render() {
        return <NumberContext.Provider
            value={{
                number: this.state.number,
                updateNumber: this.updateNumber
            }}>
            <h6>{this.props.children}</h6>
        </NumberContext.Provider>
    }
}
