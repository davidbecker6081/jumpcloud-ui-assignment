import React from 'react'
import './newUserForm.css'

class NewUserForm extends React.Component {
    constructor() {
        super()
        this.state = {
            username: '',
            email: ''
        }
        this.createNewUser = this.createNewUser.bind(this)
        this.constructUser = this.constructUser.bind(this)
    }

    constructUser() {
        const { username, email } = this.state
        return {
            username,
            email
        }
    }

    createNewUser(e) {
        const { username, email } = this.state
        const { createNewUser } = this.props
        e.preventDefault()
        if (!!username && !!email) {
            const user = this.constructUser()
            createNewUser(user)
        } else {
            console.log('need a user name and email')
        }
    }

    render() {
        const { username, email } = this.state
        const { toggleCreateNewUser } = this.props
        return (
            <form onSubmit={(e) => this.createNewUser(e)}>
                <input type='text' placeholder='Username' value={username} onChange={(e) => this.setState({ username: e.target.value })} />
                <input type='email' placeholder='Email' value={email} onChange={(e) => this.setState({ email: e.target.value })} />
                <button type='submit'>Create New User</button>
                <button onClick={() => toggleCreateNewUser()}>X</button>
            </form>
        )
    }
}

export default NewUserForm