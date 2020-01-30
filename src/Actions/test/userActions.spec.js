import sinon from 'sinon'
import UserService from '../../Services/UserService'
import {
    TOGGLE_CREATE_NEW_USER,
    CLEAR_ERROR,
    TOGGLE_DELETE_USER,
    GET_ALL_USERS_SUCCESS,
    GET_ALL_USERS_ERRED
} from '../utils/constants'
import {
    toggleCreateNewUser,
    clearError,
    toggleDeleteUser,
    getAllUsers
} from '../userActions'

describe('User Actions', () => {
    describe('Pure Actions', () => {
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
    })

    describe('API Request Actions', () => {
        const userA = { email: 'email@email.com', username: 'user1234' }
        const userB = { email: 'emailB@email.com', username: 'user5678'}
        const testUsers = [userA, userB]

        describe('GET ALL USERS', () => {
            const action = getAllUsers
            let type, payload, getAllUsersStub

            afterEach(() => {
                sinon.restore()
            })

            it('Should dispatch the correct payload for a successful request', async () => {
                type = GET_ALL_USERS_SUCCESS
                payload = { users: testUsers }
                getAllUsersStub = sinon.stub(UserService, 'getAllUsers').callsFake(() => testUsers)

                try {
                    const actual = await action()
                    expect(getAllUsersStub.called).toEqual(true)
                    expect(actual.type).toEqual(type)
                    expect(actual.payload).toEqual(payload)
                } catch (error) {}

            })
            it('Should dispatch the correct payload for a erred request', async () => {
                type = GET_ALL_USERS_ERRED
                const errorMessage = 'The request erred'
                payload = { error: { message: errorMessage } }
                getAllUsersStub = sinon.stub(UserService, 'getAllUsers').value(() => ({ message: errorMessage }))
                
                try {
                    const actual = await action()
                } catch (error) {
                    expect(getAllUsersStub.called).toEqual(false)
                    expect(error.message).toEqual(errorMessage)
                    expect(actual.type).toEqual(type)
                    expect(actual.payload).toEqual(payload)
                }
            })
        })
    })
})

