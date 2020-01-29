import CONSTANTS from '../Actions/utils/constants'

const initialState = {
    users: [],
    status: 'OK'
}

export default (state = initialState, action) => {
    switch(action.type) {
        case CONSTANTS.GET_ALL_USERS:
            return {
                ...state,
                users: action.payload
            }
        case CONSTANTS.CREATE_NEW_USER:
            return {
                ...state,
                users: [...state.users, action.payload],
                status: 'OK'
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
        default:
            return initialState
    }
}