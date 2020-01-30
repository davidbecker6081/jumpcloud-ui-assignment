import CONSTANTS from '../Actions/utils/constants'

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
        case CONSTANTS.GET_ALL_USERS:
            return {
                ...state,
                users: action.payload
            }
        case CONSTANTS.TOGGLE_CREATE_NEW_USER:
            return {
                ...state,
                createNewUserWindowOpen: !state.createNewUserWindowOpen
            }
        case CONSTANTS.CREATE_NEW_USER:
            return {
                ...state,
                users: [...state.users, action.payload]
            }
        case CONSTANTS.CREATE_NEW_USER_ERRED:
            return {
                ...state,
                status: action.payload
            }
        case CONSTANTS.CLEAR_ERROR:
            return {
                ...state,
                status: 'OK'
            }
        case CONSTANTS.TOGGLE_DELETE_USER:
            return {
                ...state,
                deleteUserConfirmation: !state.deleteUserConfirmation,
                userToDelete: action.payload
            }
        case CONSTANTS.DELETE_USER_SUCCESS:
            return {
                ...state,
                deleteUserConfirmation: !state.deleteUserConfirmation,
                userToDelete: null,
                users: state.users.filter(user => user.id !== action.payload)
            }
        case CONSTANTS.TOGGLE_UPDATE_USER:
            return {
                ...state,
                userToUpdate: action.payload
            }
        default:
            return initialState
    }
}