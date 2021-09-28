import React, { Component } from 'react';
import Habit from './habit';
import AddForm from './addform';


class Habits extends Component {

    handleIncrement = (habit) => {
        this.props.onIncrement(habit)
      }
      
      handleDecrement = (habit) => {
        this.props.onDecrement(habit)
      }
      
      handleDelete = (habit) => {
        this.props.onDelete(habit)
      }

      handleCreate = (name) => {
        this.props.onCreate(name)
      }

      


    render() {
        console.log('habits')
        return (
            <>
            <AddForm onCreate={this.handleCreate} />
            <ul>
             {this.props.habits.map(habit => 
                 <Habit 
                 key={habit.id}
                 habit={ habit } 
                 onIncrement={this.handleIncrement}
                 onDecrement={this.handleDecrement}
                 onDelete={this.handleDelete}
                 />
             )} 
            </ul>
            <button onClick={this.props.onReset} className="habits-reset">Reset All</button>
            </>
            
        );
    }
}

export default Habits;