export const updateUsers = ({ users, updatedUser }) => users.map(user => {
    if (user.id === updatedUser.id) {
        return updatedUser
    }
    return user
})