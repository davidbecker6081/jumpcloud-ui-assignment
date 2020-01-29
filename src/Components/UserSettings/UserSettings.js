import React from 'react'
import UserSettingsContainer from '../../Containers/UserSettingsContainer'
import NewUserForm from '../NewUserForm/NewUserForm'
import Error from '../Error/Error'

const UserSettings = ({ createNewUser, status, clearError, toggleCreateNewUser, createNewUserWindowOpen }) => (
    <section>
        <button onClick={() => toggleCreateNewUser()}>+</button>
        { createNewUserWindowOpen &&
            <NewUserForm
                toggleCreateNewUser={toggleCreateNewUser}
                createNewUser={createNewUser}
            />
        }
        { status !== 'OK' && <Error clearError={clearError} error={status.message} /> }
    </section>
)

export default UserSettingsContainer(UserSettings)