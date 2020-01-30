import {
    GET_ALL_USERS_SUCCESS,
    GET_ALL_USERS_ERRED,
    TOGGLE_CREATE_NEW_USER,
    CREATE_NEW_USER_SUCCESS,
    CREATE_NEW_USER_ERRED,
    CLEAR_ERROR,
    TOGGLE_DELETE_USER,
    DELETE_USER_SUCCESS,
    DELETE_USER_ERRED,
    TOGGLE_UPDATE_USER,
    UPDATE_USER_SUCCESS,
    UPDATE_USER_ERRED
} from './utils/constants'
import UserService from '../Services/UserService'

export const getAllUsers = () => async (dispatch) => {
    const response = await UserService.getAllUsers()
    if (!!response || !response.message) {
        dispatch({
            type: GET_ALL_USERS_SUCCESS,
            payload: { users: response }
        })
    } else {
        dispatch({
            type: GET_ALL_USERS_ERRED,
            payload: { error: response }
        })
    }
}

export const toggleCreateNewUser = () => ({
    type: TOGGLE_CREATE_NEW_USER
})

export const createNewUser = (userInfo) => async (dispatch) => {
    const response = await UserService.createNewUser(userInfo)
    if (!!response.email) {
        dispatch({
            type: CREATE_NEW_USER_SUCCESS,
            payload: { newUser: response }
        })
        dispatch(toggleCreateNewUser())
    } else {
        dispatch({
            type: CREATE_NEW_USER_ERRED,
            payload: { error: response }
        })
    }
}

export const toggleDeleteUser = (userId) => {
    if (userId) {
        return {
            type: TOGGLE_DELETE_USER,
            payload: { userId }
        }
    }
    return {
        type: TOGGLE_DELETE_USER,
        payload: { userId: null }
    }
}

export const deleteUser = (userId) => async (dispatch) => {
    const response = await UserService.deleteUser(userId)
    if (response.id) {
        dispatch({
            type: DELETE_USER_SUCCESS,
            payload: { userId: response.id }
        })
    } else {
        dispatch({
            type: DELETE_USER_ERRED,
            payload: { error: response }
        })
    }
}

export const toggleUpdateUser = (user) => {
    if (user) {
        return {
            type: TOGGLE_UPDATE_USER,
            payload: { user }
        }
    }
    return {
        type: TOGGLE_UPDATE_USER,
        payload: { user: null }
    }
}

export const updateUser = (user) => async (dispatch) => {
    const response = await UserService.updateUser(user)
    if (response.id) {
        dispatch({
            type: UPDATE_USER_SUCCESS,
            payload: { user: response }
        })
    } else {
        dispatch({
            type: UPDATE_USER_ERRED,
            payload: { error: response }
        })
    }
}

export const clearError = () => ({
    type: CLEAR_ERROR
})