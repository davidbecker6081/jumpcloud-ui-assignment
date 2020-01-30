import React from 'react'
import UserSettingsContainer from '../../Containers/UserSettingsContainer'
import UserForm from '../UserForm/UserForm'
import Error from '../Error/Error'
import './userSettings.css'

const UserSettings = ({
    createNewUser,
    status,
    clearError,
    toggleCreateNewUser,
    createNewUserWindowOpen,
    toggleUpdateUser,
    userToUpdate,
    updateUser
}) => (
    <section className='user-settings'>
        <button className='user-settings-btn' onClick={() => toggleCreateNewUser()}>+</button>
        {
            createNewUserWindowOpen && !userToUpdate &&
                <UserForm
                    toggleWindow={toggleCreateNewUser}
                    createNewUser={createNewUser}
                />
        }
        {
            !createNewUserWindowOpen && userToUpdate &&
                <UserForm
                    toggleWindow={toggleUpdateUser}
                    updateUser={updateUser}
                    userIdToUpdate={userToUpdate.id}
                    username={userToUpdate.username}
                    email={userToUpdate.email}
                />
        }
        { status !== 'OK' && <Error clearError={clearError} error={status.message} /> }
    </section>
)

export default UserSettingsContainer(UserSettings)