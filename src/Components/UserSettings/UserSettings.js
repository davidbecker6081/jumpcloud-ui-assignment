import React from 'react'
import UserSettingsContainer from '../../Containers/UserSettingsContainer'
import UserForm from '../UserForm/UserForm'
import Error from '../Error/Error'

const UserSettings = ({
    createNewUser,
    status,
    clearError,
    toggleCreateNewUser,
    createNewUserWindowOpen,
    toggleUpdateUser,
    userToUpdate
}) => (
    <section>
        <button onClick={() => toggleCreateNewUser()}>+</button>
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
                    updateUser={() => console.log('update')}
                    username={userToUpdate.username}
                    email={userToUpdate.email}
                />
        }
        { status !== 'OK' && <Error clearError={clearError} error={status.message} /> }
    </section>
)

export default UserSettingsContainer(UserSettings)