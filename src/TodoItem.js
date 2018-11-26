import React, { Component } from "react";
import TodoList from "./TodoList";

class TodoItem extends Component {
    render() {
      return (
        <li className={this.props.completed ? "completed" : ""}>
          <div className="view">
            <input
              className="toggle"
              type="checkbox"
              checked={this.props.completed}
              onClick={this.props.handleToggleTodo}
            />
            <label>{this.props.title}</label>
            <button className="destroy" onClick={this.props.handleDeleteTodo} />
          </div>
        </li>
      );
    }
  }
  
  export default TodoItem;

  // does TodoItem need access to state???
  // const mapstatetoprops = state => 

export default connect(
    // state=> ({

    //     active: state.todos.filter(todo => !todo.completed).length

    // })
    mapStateToProps
    ,
    mapDispatchToProps
    // dispatch => ({
    //     deleteCompletedTodos: () => dispatch(deleteCompletedTodos())
    // })
)(TodoItem);