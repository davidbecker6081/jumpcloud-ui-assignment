import React from 'react'
import AllUsersContainer from '../../Containers/AllUsersContainer'
import User from '../User/User'
import Confirmation from '../Confirmation/Confirmation'
import UserSettings from '../UserSettings/UserSettings'
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
            <section className='allUsers'>
                {
                    users.map(user => 
                        <User
                            key={user.id}
                            username={user.username}
                            toggleDeleteUser={toggleDeleteUser.bind(null, user.id)}
                            toggleUpdateUser={toggleUpdateUser.bind(null, user)}
                        />
                    )
                }
                { deleteUserConfirmation && <Confirmation toggleDeleteUser={toggleDeleteUser} deleteUser={deleteUser.bind(null, userToDelete)}/> }
            </section>
        )
    }
}

export default AllUsersContainer(AllUsers)