import React from 'react'
import AllUsersContainer from '../../Containers/AllUsersContainer'
import User from '../User/User'
import './allUsers.css'


class AllUsers extends React.Component {
    componentDidMount() {
        this.props.getAllUsers()
    }

    render() {
        return (
            <section className='allUsers'>
                {
                    this.props.users.map(user => 
                        <User
                            key={user.id}
                            user={user.username}
                        />
                    )
                }
            </section>
        )
    }
}

export default AllUsersContainer(AllUsers)