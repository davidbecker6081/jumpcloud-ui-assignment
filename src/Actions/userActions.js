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
    if (response.id) {
        dispatch({
            type: CONSTANTS.DELETE_USER_SUCCESS,
            payload: response.id
        })
    } else {
        dispatch({
            type: CONSTANTS.DELETE_USER_ERRED,
            payload: response
        })
    }
}

export const toggleUpdateUser = (user) => {
    if (user) {
        return {
            type: CONSTANTS.TOGGLE_UPDATE_USER,
            payload: user
        }
    }
    return {
        type: CONSTANTS.TOGGLE_UPDATE_USER,
        payload: null
    }
}

export const updateUser = (user) => async (dispatch) => {
    const response = await UserService.updateUser(user)
    if (response.id) {
        dispatch({
            type: CONSTANTS.UPDATE_USER_SUCCESS,
            payload: response
        })
    } else {
        dispatch({
            type: CONSTANTS.UPDATE_USER_ERRED,
            payload: response
        })
    }
}

export const clearError = () => ({
    type: CONSTANTS.CLEAR_ERROR
})