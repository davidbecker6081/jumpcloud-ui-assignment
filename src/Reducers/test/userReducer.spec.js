import UserReducer from '../userReducer'
import {
    GET_ALL_USERS_SUCCESS,
    GET_ALL_USERS_ERRED
} from '../../Actions/utils/constants'

describe('User Reducer', () => {
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
    it('Should have a default state', () => {
        const action = { type: undefined }
        const expectedReturn = initialState
        expect(UserReducer(undefined, action)).toEqual(expectedReturn)
    })
    it('Should get all the users', () => {
        const action = { type: GET_ALL_USERS_SUCCESS, payload: { users: testUsers }}
        const expectedReturn = { ...initialState, users: testUsers }
        const actualReturn = UserReducer(undefined, action)
        const userAFound = !!actualReturn.users.find(user => user.username === userA.username)

        expect(actualReturn).toEqual(expectedReturn)
        expect(actualReturn.users.length).toEqual(2)
        expect(userAFound).toEqual(true)
    })

    it('Should set the status correctly if get all users erred', () => {
        const errorMessage = { message: 'Get all users erred' }
        const action = { type: GET_ALL_USERS_ERRED, payload: { error: errorMessage }}
        const expectedReturn = { ...initialState, status: errorMessage }
        const actualReturn = UserReducer(undefined, action)

        expect(actualReturn).toEqual(expectedReturn)
        expect(actualReturn.status).toEqual(errorMessage)
        expect(actualReturn.status.message).toEqual(errorMessage.message)
    })
})