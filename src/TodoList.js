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

const mapStateToProps = (state) => {
  return { 
    active: state.todos.filter(todo => !todo.completed).length,
    
  }
};

export default connect(
    mapStateToProps
    ,
    mapDispatchToProps
    // dispatch => ({
    //     deleteCompletedTodos: () => dispatch(deleteCompletedTodos())
    // })
)(TodoList);