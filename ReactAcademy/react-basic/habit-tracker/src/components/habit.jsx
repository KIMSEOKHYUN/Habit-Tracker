import React, { PureComponent } from 'react';

class Habit extends PureComponent {

    handleIncrement = () => {
        this.props.onIncrement(this.props.habit)
    }

    handleDecrement = () => {
        this.props.onDecrement(this.props.habit)
    }
    
    handleDelete = () => {
        this.props.onDelete(this.props.habit)
    }

    render() {
        console.log('habit')
        const { name, count } = this.props.habit;
        return (
            <li className="habit">
                <span className="habit-name">{name}</span>
                <span className="habit-count">{count}</span>
                <button className="habit-button habit-increase" onClick={this.handleIncrement}>
                    <i className="fas fa-plus"></i>
                </button>

                <button className="habit-button habit-decrease" onClick={this.handleDecrement}>
                    <i className="fas fa-minus"></i>
                </button>

                <button className="habit-button habit-delete" onClick={this.handleDelete}>
                    <i className="fas fa-trash"></i>
                </button>
            </li>
        );
    }
}

export default Habit; 