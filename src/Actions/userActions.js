import CONSTANTS from './utils/constants'
import UserService from '../Services/UserService'

export const getAllUsers = () => async (dispatch) => {
    const users = await UserService.getAllUsers()
    if (!!users) {
        dispatch({
            type: CONSTANTS.GET_ALL_USERS,
            payload: users
        })
    }
}

export const toggleCreateNewUser = () => ({
    type: CONSTANTS.TOGGLE_CREATE_NEW_USER
})

export const createNewUser = (userInfo) => async (dispatch) => {
    const response = await UserService.createNewUser(userInfo)
    if (!!response.email) {
        dispatch({
            type: CONSTANTS.CREATE_NEW_USER,
            payload: response
        })
        dispatch(toggleCreateNewUser())
    } else {
        dispatch({
            type: CONSTANTS.CREATE_NEW_USER_ERRED,
            payload: response
        })
    }
}

export const toggleDeleteUser = (userId) => {
    if (userId) {
        return {
            type: CONSTANTS.TOGGLE_DELETE_USER,
            payload: userId
        }
    }
    return {
        type: CONSTANTS.TOGGLE_DELETE_USER,
        payload: null
    }
}

export const deleteUser = (userId) => async (dispatch) => {
    const response = await UserService.deleteUser(userId)
    dispatch({
        type: CONSTANTS.DELETE_USER_SUCCESS,
        payload: response.id
    })
} 

export const clearError = () => ({
    type: CONSTANTS.CLEAR_ERROR
})