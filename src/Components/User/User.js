import React from 'react'
import './user.css'

const User = ({ username, toggleDeleteUser, toggleUpdateUser }) => (
    <article className="user" onClick={() => toggleUpdateUser()}>
        {username}
        <button onClick={() => toggleDeleteUser()}>X</button>
    </article>
)

export default User