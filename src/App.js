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

  // Handles the changes typed into the input
  handleChanges = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

    // Adds the new task state set by out handlechange, as well as sets the state for the id
    // and the initial state of completed to false. It then brings down our initial state for
    // todos and adds the new task to the array.
  addTodo = (e) => {
    e.preventDefault();
    const newTodo = {
      task: this.state.todo,
      id: Date.now(),
      completed: false,
    };
    this.setState({ todos: [...this.state.todos, newTodo], todo: "" });
  };

  // Maps through todos when the onclick event is invoked, then toggles the state of completed to the opposite of the current boolean it's set to.
  toggleComplete = itemID => {
    const complete = this.state.todos.map((todo) => {
      if (todo.id === itemID) {
        todo.completed = !todo.completed;
      }
      return todo;
    });
    this.setState({ complete });
  };

  // Sets the state to a new filtered array that only returns tasks that have a completed state of false.
  removeTodo = (e) => {
    e.preventDefault();
    this.setState((prevState) => {
      return {
        todos: prevState.todos.filter((todo) => {
          return !todo.completed;
        }),
      };
    });
  };

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
