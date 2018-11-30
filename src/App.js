import React, { Component } from "react";
import "./App.css";
import { Route, Switch, Link } from "react-router-dom";
import { connect } from 'react-redux';
import TodoList from "./TodoList";
import { addTodo } from "./actions";
import { clearCompletedTodo } from "./actions";
// curly braces indicate you want to import a named export

class App extends Component {
  // added to reducer already.
  // handleToggleTodo = todoIdThatWasClicked () => {
  //   const newTodos = this.state.todos.map(todo => {
  //     if (todo.id === todoIdThatWasClicked) {
  //       todo.completed = !todo.completed;
  //     }
  //     return todo;
  //   });

  //   this.setState({
  //     todos: newTodos
  //   });
  // };

  // handleDeleteCompletedTodos = event => {
  //   const newTodos = this.state.todos.filter(todo => {
  //     if (todo.completed === true) {
  //       return false;
  //     }
  //     return true;
  //   });
  //   this.setState({
  //     todos: newTodos
  //   });
  // };

  // handleDeleteTodo = todoIdThatWasClicked => event => {
  //   const newTodos = this.state.todos.filter(todo => {
  //     if (todo.id === todoIdThatWasClicked) {
  //       return false;
  //     }
  //     return true;
  //   });
  //   this.setState({
  //     todos: newTodos
  //   });
  // };

  handleAddNewTodo = event => {
    if (event.keyCode === 13) {
      this.props.addNewTodo(event.target.value)
      event.target.value = "";
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
            onKeyDown={this.handleAddNewTodo}

          />
        </header>
        <section className="main">
          <Switch>
            <Route
              exact
              path="/"
              render={props => (
                <TodoList
                  path ='/'
                />
              )}
            />
            <Route
              path={"/active"}
              render={props => (
                <TodoList
                  path="/active" />
              )}

            />
            <Route
              path={"/completed"}
              render={props => (
                <TodoList
                  path="/completed"
                />
              )}
            />
          </Switch>
        </section>
        <footer className="footer">
          <span className="todo-count">
            <strong>{this.props.active}</strong> item(s) left
          </span>
          <ul className="filters">
            <li className="sublink">
              <Link to="/">All</Link>
            </li>
            <li className="sublink">
              <Link to="/active">Active</Link>
            </li>
            <li className="sublink">
              <Link to="/completed">Completed</Link>
            </li>
          </ul>
          <button
            className="clear-completed"
            onClick={this.props.handleDeleteCompletedTodos}
          >
            Delete completed
          </button>
        </footer>
      </section>
    );
  }
}

export const mapStateToProps = (state) => {
  return { 
    active: state.todos.filter(todo => !todo.completed).length
    
  }
};

export const mapDispatchToProps = (dispatch) => {
  return {
    addNewTodo: (todoTitle) => dispatch(addTodo(todoTitle)),
    handleDeleteCompletedTodos:() => dispatch(clearCompletedTodo())
    
  }
};

export default connect(mapStateToProps,mapDispatchToProps)(App);