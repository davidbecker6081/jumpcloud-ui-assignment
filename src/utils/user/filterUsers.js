export const filterUsers = ({ users, userToRemove }) => users.filter(user => user.id !== userToRemove)