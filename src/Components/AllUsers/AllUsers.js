import React from 'react'
import AllUsersContainer from '../../Containers/AllUsersContainer'
import User from '../User/User'
import Confirmation from '../Confirmation/Confirmation'
import './allUsers.css'


class AllUsers extends React.Component {
    componentDidMount() {
        this.props.getAllUsers()
    }

    render() {
        const {
            users,
            toggleDeleteUser,
            deleteUserConfirmation,
            deleteUser,
            userToDelete,
            toggleUpdateUser
        } = this.props
        return (
            <ul className='allUsers'>
                {
                    users.map(user => 
                        <User
                            key={user.id}
                            username={user.username}
                            email={user.email}
                            toggleDeleteUser={toggleDeleteUser.bind(null, user.id)}
                            toggleUpdateUser={toggleUpdateUser.bind(null, user)}
                        />
                    )
                }
                { deleteUserConfirmation && <Confirmation toggleDeleteUser={toggleDeleteUser} deleteUser={deleteUser.bind(null, userToDelete)}/> }
            </ul>
        )
    }
}

export default AllUsersContainer(AllUsers)