import constants from '../utilities/constants'

export const addTodo = todo => ({
    type: constants.ADD_TODO,
    todo
})

export const deleteTodo = key => ({
    type: constants.DELETE_TODO,
    key
})

export const toggleCompleted = key => ({
    type: constants.TOGGLE_COMPLETED,
    key
})

export const updateTodo = (key, updatedValue) => ({
    type: constants.UPDATE_TODO,
    key,
    updatedValue
})