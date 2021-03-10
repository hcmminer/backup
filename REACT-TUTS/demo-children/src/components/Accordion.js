import React, { Component } from 'react';


class Accordion extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isCollapsed: true
        };
        this.onClick = this.onClick.bind(this);
    }

    onClick() {
        this.setState({
            isCollapsed: !this.state.isCollapsed
        });
    }

    render() {
        const { heading, children } = this.props;
        const  {isCollapsed}  = this.state;
        return (
            <div className='Accordion'>
                <div onClick={this.onClick}>{heading}</div>
                { isCollapsed && <div>{children}</div>}
            </div>
        )
    }
}

export default Accordion;