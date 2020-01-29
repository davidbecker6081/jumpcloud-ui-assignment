import React from 'react'
import UserSettingsContainer from '../../Containers/UserSettingsContainer'

const createRandomUser = () => ({ username: `a${Math.random().toString(36).substring(2, 15)}`, email: `a${Math.random().toString(36).substring(2, 15)}davidC@email.com` })

const UserSettings = ({ createNewUser }) => (
    <section>
        <button onClick={() => createNewUser(createRandomUser())}>+</button>
    </section>
)

export default UserSettingsContainer(UserSettings)