import React from 'react'
import './user.css'

const User = ({ username, toggleDeleteUser }) => (
    <article className="user">
        {username}
        <button onClick={() => toggleDeleteUser()}>X</button>
    </article>
)

export default User