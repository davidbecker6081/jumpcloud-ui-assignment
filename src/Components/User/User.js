import React from 'react'
import './user.css'

const User = ({ username, email, toggleDeleteUser, toggleUpdateUser }) => (
    <li className="user">
        <div className="user-info-container" onClick={() => toggleUpdateUser()}>
            <h3>Username:</h3>
            <p className="username">{username}</p>
        </div>
        <div className="user-info-container" onClick={() => toggleUpdateUser()}>
            <h3>Email:</h3>
            <p className="email" onClick={() => toggleUpdateUser()}>{email}</p>
        </div>
        <button className="delete-user-btn" onClick={(e) => { e.stopPropagation(); toggleDeleteUser() }}>X</button>
    </li>
)

export default User