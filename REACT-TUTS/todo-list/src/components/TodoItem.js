import React, { Component } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import './TodoItem.css';
import checkImg from '../img/check.svg';
import checkCompleteImg from '../img/check-complete.svg'

class TodoItem extends Component {
    render() {
        const { item, onClick } = this.props;

        let url = checkImg;
        if (item.isComplete) {
            url = checkCompleteImg;
        }
        return (
            <div className={classNames('TodoItem', {
                'isSelected': item.isComplete
            })}>
                <img src={url} onClick={onClick}/>
                <p>{item.title}</p>
            </div>
        )
    }
} 

TodoItem.propTypes = {
    item: PropTypes.shape({
        isComplete: PropTypes.bool.isRequired,
        title: PropTypes.string.isRequired
    }),
    onClick: PropTypes.func.isRequired
}

export default TodoItem;