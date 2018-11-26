import React, { Component } from "react";
import "./App.css";
import todoList from "./todos.json";
import { Route, Switch, Link } from "react-router-dom";
import TodoList from "./TodoList";
class App extends Component {
  state = { todos: todoList };

  handleToggleTodo = todoIdThatWasClicked => event => {
    const newTodos = this.state.todos.map(todo => {
      if (todo.id === todoIdThatWasClicked) {
        todo.completed = !todo.completed;
      }
      return todo;
    });

    this.setState({
      todos: newTodos
    });
  };

  handleDeleteCompletedTodos = event => {
    const newTodos = this.state.todos.filter(todo => {
      if (todo.completed === true) {
        return false;
      }
      return true;
    });
    this.setState({
      todos: newTodos
    });
  };

  handleDeleteTodo = todoIdThatWasClicked => event => {
    const newTodos = this.state.todos.filter(todo => {
      if (todo.id === todoIdThatWasClicked) {
        return false;
      }
      return true;
    });
    this.setState({
      todos: newTodos
    });
  };

  addNewTodo = event => {
    if (event.keyCode === 13) {
      let newTodos = this.state.todos.slice(0);
      let newTodo = {
        userId: 1,
        id: Math.floor(Math.random() * 30938409834) + 1,
        title: event.target.value,
        completed: false
      };
      newTodos.push(newTodo);
      this.setState({
        todos: newTodos
      });
      console.log(this.state);
    }
  };

  render() {
    return (
      <section className="todoapp">
        <header className="header">
          <h1>todos</h1>
          <input
            className="new-todo"
            placeholder="What needs to be done?"
            autoFocus
            onKeyDown={this.addNewTodo}
          />
        </header>
        <section className="main">
          <Switch>
            <Route
              exact
              path="/"
              render={props => (
                <TodoList
                  todos={this.state.todos}
                  handleToggleTodo={this.handleToggleTodo}
                  handleDeleteTodo={this.handleDeleteTodo}
                />
              )}
            />
            <Route
              path={"/active"}
              render={props => (
                <TodoList
                  todos={this.state.todos.filter(todo => !todo.completed)}
                  handleToggleTodo={this.handleToggleTodo}
                  handleDeleteTodo={this.handleDeleteTodo}
                />
              )}
            />
            <Route
              path={"/completed"}
              render={props => (
                <TodoList
                  todos={this.state.todos.filter(todo => todo.completed)}
                  handleToggleTodo={this.handleToggleTodo}
                  handleDeleteTodo={this.handleDeleteTodo}
                />
              )}
            />
          </Switch>
        </section>
        <footer className="footer">
          <span className="todo-count">
            <strong>0</strong> item(s) left
          </span>
          <ul className="filters">
            <li>
              <Link to="/">All</Link>
            </li>
            <li>
              <Link to="/active">Active</Link>
            </li>
            <li>
              <Link to="/completed">Completed</Link>
            </li>
          </ul>
          <button
            className="clear-completed"
            onClick={this.handleDeleteCompletedTodos}
          >
            Clear completed
          </button>
        </footer>
      </section>
    );
  }
}

export default App;

// const mapstatetoprops = state => 

export default connect(
    state=> ({

        active: state.todos.filter(todo => !todo.completed).length

    }),

    dispatch => ({
        deleteCompletedTodos: () => dispatch(deleteCompletedTodos())
    })
)(App)
