import React from 'react'
import './userForm.css'

class UserForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            username: props.username || '',
            email: props.email || '',
            isValidInput: props.username && props.email
        }
        this.createNewOrUpdateUserWithValidation = this.createNewOrUpdateUserWithValidation.bind(this)
        this.constructUser = this.constructUser.bind(this)
        this.toggleValidation = this.toggleValidation.bind(this)
        this.checkInputValidation = this.checkInputValidation.bind(this)
    }

    constructUser(options) {
        const { username, email } = this.state
        if (options) {
            return {
                username,
                email,
                ...options
            }
        }
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
        const { createNewUser, updateUser, userIdToUpdate } = this.props
        e.preventDefault()
        if (this.checkInputValidation()) {
            const user = userIdToUpdate ? this.constructUser({ id: userIdToUpdate }) : this.constructUser()
            !!updateUser ? updateUser(user) : createNewUser(user)
        } else {
            this.toggleValidation({ isValidInput: false })
        }
    }

    render() {
        const { username, email, isValidInput } = this.state
        const { toggleWindow, email: emailProps, username: usernameProps } = this.props
        const showValidationError = !isValidInput && username && email
        const submitDisabled = !username || !email
        const submitText = (emailProps && usernameProps) ? 'Update User' : 'Create New User'
        return (
            <form className='user-form' onSubmit={(e) => this.createNewOrUpdateUserWithValidation(e)}>
                <div>
                    <div className='user-form-field-container'>
                        <h3>Username:</h3>
                        <input type='text' placeholder='Username' value={username} onChange={(e) => this.catchUserInput('username', e.target.value)} />
                    </div>
                    <div className='user-form-field-container'>
                        <h3>Email:</h3>
                        <input type='email' placeholder='Email' value={email} onChange={(e) => this.catchUserInput('email', e.target.value)} />
                    </div>
                </div>
                <div className='user-form-btn-container'>
                    <button type='submit' disabled={submitDisabled}>{submitText}</button>
                    { showValidationError && <p className='validation-error'>Please enter a valid username and email</p>}
                </div>
                <button className='close-form-btn' onClick={() => toggleWindow()}>X</button>
            </form>
        )
    }
}

export default UserForm