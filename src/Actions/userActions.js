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