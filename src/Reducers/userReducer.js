import constants from '../Actions/utils/constants'

const initialState = {
    users: []
}

export default (state = initialState, action) => {
    switch(action.type) {
        case constants.GET_ALL_USERS:
            return {
                ...state,
                users: action.payload
            }
        default:
            return initialState
    }
}