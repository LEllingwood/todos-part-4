export const initialState = {

}

export function reducer(state = initialState, action){
    switch(action.type){
        // TOGGLE_TODO, ADD_TODO, DELETE_TODO, CLEAR_COMPLETED_TODOS

        case TOGGLE_TODO:
            return {
                ...state
            }
        
        case ADD_TODO: 
            return {
                ...state
            }
        case DELETE_TODO: 
            return {
                ...state
            }
        
        case CLEAR_TODOS: 
            return {
                ...state
            }
        
        default: 
            return state
    }
};

// const mapstatetoprops = state => 

export default connect(
    state=> ({

        active: state.todos.filter(todo => !todo.completed).length

    }),

    dispatch => ({
        deleteCompletedTodos: () => dispatch(deleteCompletedTodos())
    })
)(TodoFooter)