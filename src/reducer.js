import todoList from "./todos.json";
import { TOGGLE_TODO } from "./actions";
import { ADD_TODO } from "./actions";
import { DELETE_TODO } from "./actions";
import { CLEAR_COMPLETED_TODO } from "./actions";

export const initialState = {
  todos: todoList
};

export function reducer(state = initialState, action) {
  console.log(action)
  switch (action.type) {
    case TOGGLE_TODO:
      const newTodos = state.todos.map(todo => {
        if (todo.id === action.payload) {
          todo.completed = !todo.completed;
        }
        return todo;
      });
      return {
        ...state,
        todos: newTodos
      };

    case ADD_TODO:
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            userId: 1,
            id: Math.floor(Math.random() * 30938409834) + 1,
            title: action.payload,
            completed: false
          }
        ]
      };

    case DELETE_TODO:
      
      return {
        ...state,
        todos: state.todos.filter(todo => {
          if (todo.id === action.payload) {
            return false;
          }
          return true;
        })
      };

    case CLEAR_COMPLETED_TODO:
  
      return {
        ...state,
        todos: state.todos.filter(todo => {
          if (todo.completed === true) {
            return false;
          }
          return true;
        })
      };

    default:
      return state;
  }
}

export default reducer;
