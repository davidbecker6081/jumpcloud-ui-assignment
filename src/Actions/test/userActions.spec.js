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
} from '../utils/constants'
import {
    toggleCreateNewUser,
    clearError,
    toggleDeleteUser
} from '../userActions'

const testPureAction = ({ testName, action, type, payload }) => {
    it(testName, () => {
        const actual = action()
        expect(actual.type).toEqual(type)
        expect(actual.payload).toEqual(payload)
    })
}

testPureAction({ testName: 'Should toggle create new user', action: toggleCreateNewUser, type: TOGGLE_CREATE_NEW_USER, payload: undefined })
testPureAction({ testName: 'Should clear error', action: clearError, type: CLEAR_ERROR, payload: undefined })
testPureAction({ testName: 'Should toggle delete user open', action: () => toggleDeleteUser(1), type: TOGGLE_DELETE_USER, payload: { userId: 1 } })
testPureAction({ testName: 'Should toggle delete user closed', action: () => toggleDeleteUser(), type: TOGGLE_DELETE_USER, payload: { userId: null } })


