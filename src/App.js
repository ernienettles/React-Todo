import React from "react";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";

class App extends React.Component {
  // you will need a place to store your state in this component.
  constructor() {
    super();
    this.state = {
      todos: [
        {
          task: "",
          id: "",
          completed: false,
        },
      ],
      todo: "",
    };
  }

  handleChanges = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  addTodo = e => {
    e.preventDefault();
    const newTodo = {
      task: this.state.todo,
      id: Date.now(),
      completed: false,
    };
    this.setState({ todos: [...this.state.todos, newTodo], todo: "" });
  };

  toggleComplete = (itemID) => {
    const complete = this.state.todos.map(todo => {
      if (todo.id === itemID) {
        todo.completed = !todo.completed;
      }
      return todo;
    });
    this.setState({ complete });
  };

  removeTodo = e => {
    e.preventDefault();
    this.setState(prevState => {
      return {
        todos: prevState.todos.filter(todo => {
          return !todo.completed;
        })
      }
    })
  }

  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div className="App">
        <div className="header">
          <h1>Welcome to your Todo App!</h1>
          <TodoForm
            todos={this.state.todos}
            handleChanges={this.handleChanges}
            addTodo={this.addTodo}
            removeTodo={this.removeTodo}
            value={this.state.todo}
          />
        </div>
        <TodoList
          todos={this.state.todos}
          toggleComplete={this.toggleComplete}
        />
      </div>
    );
  }
}

export default App;
