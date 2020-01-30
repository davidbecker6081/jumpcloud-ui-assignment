const CONSTANTS = {
    ROUTES: {
        ALLUSERS: 'http://localhost:8005/api/systemusers',
        CREATENEWUSER: 'http://localhost:8005/api/systemusers',
        DELETEUSER: (id) => `http://localhost:8005/api/systemusers/${id}`,
        UPDATEUSER: (id) => `http://localhost:8005/api/systemusers/${id}`
    }
}
export default CONSTANTS