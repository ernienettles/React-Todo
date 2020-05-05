// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React, { Component } from 'react';
import Todo from './Todo';

class TodoList extends Component {

    render() {
        console.log(this.props)
        return (
            <div className='todoList'>
            {this.props.todos.map((todo, id) => (
                <Todo key={id} todo={todo} toggleComplete={this.props.toggleComplete} />
            ))}
            </div>
            
        );
    }
}

export default TodoList;