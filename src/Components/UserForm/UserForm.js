import React from 'react'
import './userForm.css'

class UserForm extends React.Component {
    static getDerivedStateFromProps(props) {
        if (props.email && props.username) {
            return {
                email: props.email,
                username: props.username,
                isValidInput: true
            }
        }
        return null
    }

    constructor() {
        super()
        this.state = {
            username: '',
            email: '',
            isValidInput: false
        }
        this.createNewOrUpdateUserWithValidation = this.createNewOrUpdateUserWithValidation.bind(this)
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

    createNewOrUpdateUserWithValidation(e) {
        const { createNewUser, updateUser } = this.props
        e.preventDefault()
        if (this.checkInputValidation()) {
            const user = this.constructUser()
            !!updateUser ? updateUser(user) : createNewUser(user)
        } else {
            this.toggleValidation({ isValidInput: false })
        }
    }

    render() {
        const { username, email, isValidInput } = this.state
        const { toggleWindow, email: emailProps, username: usernameProps } = this.props
        const submitDisabled = !username || !email
        const submitText = (emailProps && usernameProps) ? 'Update User' : 'Create New User'
        return (
            <form onSubmit={(e) => this.createNewOrUpdateUserWithValidation(e)}>
                <input type='text' placeholder='Username' value={username} onChange={(e) => this.catchUserInput('username', e.target.value)} />
                <input type='email' placeholder='Email' value={email} onChange={(e) => this.catchUserInput('email', e.target.value)} />
                <button type='submit' disabled={submitDisabled}>{submitText}</button>
                { !isValidInput && username && email && <p className='validation-error'>Please enter a valid username and email</p>}
                <button onClick={() => toggleWindow()}>X</button>
            </form>
        )
    }
}

export default UserForm