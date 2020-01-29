import TodoReducer from '../todoReducer'

describe('todo reducer', () => {
    it('should have a default state', () => {
        const action = { type: '', todo: '' }
        const expectedReturn = { todos: [] }
        expect(TodoReducer(undefined, action)).toEqual(expectedReturn)
    })
})