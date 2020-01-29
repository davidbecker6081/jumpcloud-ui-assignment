import constants from '../utilities/constants'

const initialState = {
    todos: []
}

export default (state = initialState, action) => {
    switch(action.type) {
        case constants.ADD_TODO:
            return {
                ...state,
                todos: [...state.todos, action.todo]
            }
        case constants.DELETE_TODO:
            return {
                ...state,
                todos: state.todos.filter(todo => todo.id !== action.key)
            }
        case constants.TOGGLE_COMPLETED:
            const todoToToggle = state.todos.find(todo => todo.id  === action.key)
            const updatedTodo = Object.assign({}, todoToToggle, { completed: !todoToToggle.completed })
            const updatedListOfTodos = state.todos.map(todo => {
                if (todo.id === action.key) {
                    return updatedTodo
                }
                return todo
            })
            return {
                ...state,
                todos: updatedListOfTodos
            }
        case constants.UPDATE_TODO:
            const todoToUpdate = state.todos.find(todo => todo.id === action.key)
            const updatedTodoWithValue = Object.assign({}, todoToUpdate, { value: action.updatedValue })
            const updatedListOfTodoValues = state.todos.map(todo => {
                if (todo.id === action.key) {
                    return updatedTodoWithValue
                }
                return todo
            })
            return {
                ...state,
                todos: updatedListOfTodoValues
            }
        default:
            return initialState
    }
}