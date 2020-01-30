import {
    GET_ALL_USERS,
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
} from '../Actions/utils/constants'
import {
    updateUsers,
    filterUsers,
    addUser
} from '../utils/index'

const initialState = {
    users: [],
    createNewUserWindowOpen: false,
    deleteUserConfirmation: false,
    userToDelete: null,
    userToUpdate: null,
    status: 'OK'
}


export default (state = initialState, action) => {
    switch(action.type) {
        case GET_ALL_USERS:
            return {
                ...state,
                users: action.payload.users
            }
        case TOGGLE_CREATE_NEW_USER:
            return {
                ...state,
                createNewUserWindowOpen: !state.createNewUserWindowOpen
            }
        case CREATE_NEW_USER_SUCCESS:
            return {
                ...state,
                users: addUser({ users: state.users, userToAdd: action.payload.newUser })
            }
        case CREATE_NEW_USER_ERRED:
            return {
                ...state,
                status: action.payload.error
            }
        case CLEAR_ERROR:
            return {
                ...state,
                status: 'OK'
            }
        case TOGGLE_DELETE_USER:
            return {
                ...state,
                deleteUserConfirmation: !state.deleteUserConfirmation,
                userToDelete: action.payload.userId
            }
        case DELETE_USER_SUCCESS:
            return {
                ...state,
                deleteUserConfirmation: !state.deleteUserConfirmation,
                userToDelete: null,
                users: filterUsers({ users: state.users, userToRemove: action.payload.userId })
            }
        case DELETE_USER_ERRED:
            return {
                ...state,
                status: action.payload.error
            }
        case TOGGLE_UPDATE_USER:
            return {
                ...state,
                userToUpdate: action.payload.user
            }
        case UPDATE_USER_SUCCESS:
            const { user } = action.payload

            return {
                ...state,
                userToUpdate: null,
                users: updateUsers({ users: state.users, updatedUser: user })
            }
        case UPDATE_USER_ERRED:
            return {
                ...state,
                status: action.payload.error
            }
        default:
            return state
    }
}