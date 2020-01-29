import UserReducer from '../userReducer'

describe('user reducer', () => {
    it('should have a default state', () => {
        const action = { type: '', todo: '' }
        const expectedReturn = { users: [] }
        expect(UserReducer(undefined, action)).toEqual(expectedReturn)
    })
})