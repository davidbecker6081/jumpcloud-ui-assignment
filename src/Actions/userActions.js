import CONSTANTS from './utils/constants'
import UserService from '../Services/UserService'

export const getAllUsers = () => dispatch => {
    UserService.getAllUsers()
        .then(users => {
            dispatch({
                type: CONSTANTS.GET_ALL_USERS,
                payload: users
            })
        })
}

export const createNewUser = (userInfo) => dispatch => {
    UserService.createNewUser(userInfo)
        .then(user => {
            dispatch({
                type: CONSTANTS.CREATE_NEW_USER,
                payload: user
            })
        })
        .catch(error => {
            dispatch({
                type: CONSTANTS.CREATE_NEW_USER_ERRED,
                payload: error
            })
        })
}