import React from 'react'
import './confirmation.css'

const Confirmation = ({ deleteUser, toggleDeleteUser }) => (
    <article className='confirmation-popup'>
        <p>Are you sure you want to delete this user?</p>
        <button onClick={() => deleteUser()}>Delete</button>
        <button onClick={() => toggleDeleteUser()}>Cancel</button>
    </article>
)

export default Confirmation