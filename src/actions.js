// what import statements do I need here?


export const TOGGLE_TODO = 'TOGGLE_TODO';
export const ADD_TODO = 'ADD_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const CLEAR_COMPLETED_TODOS = 'CLEAR_COMPLETED_TODOS';

// is text the appropriate argument?
export function toggleTodo(id) {
    return {
        type: TOGGLE_TODO,
        payload: id
    }
};

export function addTodo(title){
    return {
        type:ADD_TODO,
        payload: title
    }
};

export function deleteTodo(id){
    return {
        type:DELETE_TODO,
        payload: id
    }
};

export function clearCompletedTodo(text){
    return {
        type:CLEAR_COMPLETED_TODOS,
        
    }
};