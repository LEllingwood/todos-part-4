import React, { Component } from "react";
import TodoItem from "./TodoItem";
import { connect } from 'react-redux';
import { toggleTodo } from "./actions";
import { deleteTodo } from "./actions";

class TodoList extends Component {
  render() {
    console.log(this.props.path)
    return (
      <ul className="todo-list">

        {this.props.todos.map(todo => (
          <TodoItem
            title={todo.title}
            key={todo.id}
            completed={todo.completed}
            handleToggleTodo={(event) => this.props.handleToggleTodo(todo.id)}
            handleDeleteTodo={(event) => this.props.handleDeleteTodo(todo.id)}
          />
        ))}
      </ul>
    );
  }
}

export const mapStateToProps = (state, ownProps) => {
  switch (ownProps.path){
    case "/": 
      return {todos: state.todos}
    
    case "/active":
      return{ todos: state.todos.filter(todo => !todo.completed)}
    
    case "/completed": 
      return { todos: state.todos.filter(todo => todo.completed)}
    
    default:
      return {todos: state.todos}
  }

  return { 
    todos: state.todos,
  }
};

export const mapDispatchToProps = (dispatch) => {
  return {

    handleToggleTodo: (todoId) => dispatch(toggleTodo(todoId)),
    handleDeleteTodo: (todoId) => dispatch(deleteTodo(todoId))
  }

};

export default connect(mapStateToProps,mapDispatchToProps)(TodoList);