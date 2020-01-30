import UserReducer from '../userReducer'
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
} from '../../Actions/utils/constants'

describe('user reducer', () => {
    const userA = { email: 'email@email.com', username: 'user1234' }
    const userB = { email: 'emailB@email.com', username: 'user5678'}
    const testUsers = [userA, userB]
    const initialState = {
        users: [],
        createNewUserWindowOpen: false,
        deleteUserConfirmation: false,
        userToDelete: null,
        userToUpdate: null,
        status: 'OK'
    }
    it('should have a default state', () => {
        const action = { type: undefined }
        const expectedReturn = initialState
        expect(UserReducer(undefined, action)).toEqual(expectedReturn)
    })
    it('should get all the users', () => {
        const action = { type: GET_ALL_USERS, payload: { users: testUsers }}
        const expectedReturn = { ...initialState, users: testUsers }
        const actualReturn = UserReducer(undefined, action)
        const userAFound = !!actualReturn.users.find(user => user.username === userA.username)
        
        expect(actualReturn).toEqual(expectedReturn)
        expect(actualReturn.users.length).toEqual(2)
        expect(userAFound).toEqual(true)
    })
})