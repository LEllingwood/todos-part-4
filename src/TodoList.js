import React, { Component } from "react";
import TodoItem from "./TodoItem";

class TodoList extends Component {
  render() {
    return (
      <ul className="todo-list">
        {this.props.todos.map(todo => (
          <TodoItem
            title={todo.title}
            key={todo.id}
            completed={todo.completed}
            handleToggleTodo={this.props.handleToggleTodo(todo.id)}
            handleDeleteTodo={this.props.handleDeleteTodo(todo.id)}
          />
        ))}
      </ul>
    );
  }
}

export default TodoList;

// React.fragment would allow you to add things less than a div to get around the requirement that you only have one div.

// the two ways to re-render the page is to: 1) change the state, and 2) ?
