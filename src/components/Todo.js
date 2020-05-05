import React, { Component } from 'react';
import './Todo.css';

class Todo extends Component {
    render() {
        console.log(this.props.todo)
        return (
            <div className={`todo ${this.props.todo.completed ? 'completed' : ''}`} onClick={e => this.props.toggleComplete(this.props.todo.id)}>
                    <p>{this.props.todo.task}</p>
            </div>
        );
    }
}

export default Todo;