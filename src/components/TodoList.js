// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React, { Component } from 'react';

class TodoForm extends Component {

    render() {
        return (
            <div>
            <form onSubmit={this.props.addTodo}>
            <input 
            name='todo'
            type='text'
            placeholder='Enter a task'
            onChange={this.props.handleChanges}
            value={this.props.value}
            />
            <button>Add Task</button>
            <button onClick={this.props.removeTodo}>Remove Completed</button>
            </form>
                
            </div>
        );
    }
}

export default TodoForm;