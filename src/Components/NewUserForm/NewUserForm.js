import React from 'react'
import './newUserForm.css'

class NewUserForm extends React.Component {
    constructor() {
        super()
        this.state = {
            username: '',
            email: '',
            isValidInput: false
        }
        this.createNewUserWithValidation = this.createNewUserWithValidation.bind(this)
        this.constructUser = this.constructUser.bind(this)
        this.toggleValidation = this.toggleValidation.bind(this)
        this.checkInputValidation = this.checkInputValidation.bind(this)
    }

    constructUser() {
        const { username, email } = this.state
        return {
            username,
            email
        }
    }

    checkInputValidation() {
        const { username, email } = this.state
        const usernameIsValid = !!username && username.length <= 30 && !parseInt(username[0])
        const emailIsValid = !!email && email.length <= 30
        return usernameIsValid && emailIsValid
    }

    catchUserInput(field, input) {
        this.setState({
            [field]: input
        }, () => {
            this.toggleValidation({ isValidInput: true })
        })
    }

    toggleValidation({ isValidInput }) {
        this.setState({
            isValidInput
        })
    }

    createNewUserWithValidation(e) {
        const { createNewUser } = this.props
        e.preventDefault()
        if (this.checkInputValidation()) {
            const user = this.constructUser()
            createNewUser(user)
        } else {
            this.toggleValidation({ isValidInput: false })
        }
    }

    render() {
        const { username, email, isValidInput } = this.state
        const { toggleCreateNewUser } = this.props
        const submitDisabled = !username || !email
        return (
            <form onSubmit={(e) => this.createNewUserWithValidation(e)}>
                <input type='text' placeholder='Username' value={username} onChange={(e) => this.catchUserInput('username', e.target.value)} />
                <input type='email' placeholder='Email' value={email} onChange={(e) => this.catchUserInput('email', e.target.value)} />
                <button type='submit' disabled={submitDisabled}>Create New User</button>
                { !isValidInput && username && email && <p className='validation-error'>Please enter a valid username and email</p>}
                <button onClick={() => toggleCreateNewUser()}>X</button>
            </form>
        )
    }
}

export default NewUserForm