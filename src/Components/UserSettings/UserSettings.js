import React from 'react'
import UserSettingsContainer from '../../Containers/UserSettingsContainer'
import Error from '../Error/Error'

const createRandomUser = () => ({ username: `1${Math.random().toString(36).substring(2, 15)}`, email: `a${Math.random().toString(36).substring(2, 15)}davidC@email.com` })

const UserSettings = ({ createNewUser, status, clearError }) => (
    <section>
        <button onClick={() => createNewUser(createRandomUser())}>+</button>
        { status !== 'OK' && <Error clearError={clearError} error={status.message} /> }
    </section>
)

export default UserSettingsContainer(UserSettings)