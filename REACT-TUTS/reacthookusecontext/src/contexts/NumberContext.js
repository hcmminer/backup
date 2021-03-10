import React, {Component} from "react";

export const NumberContext = React.createContext();

export class NumberProvider extends Component {
    constructor(props){
        super(props);
        this.state={
            number: 5
        }
        this.updateNumber = this.updateNumber.bind(this);
    }

    updateNumber(){
        this.setState({
            number: Math.random()
        })
    }

    render(){
        return (
            <NumberContext.Provider value={{
                xxx: this.state.number,
                yyy: this.updateNumber
            }}>
                {this.props.children}
            </NumberContext.Provider>
        )
    }


}