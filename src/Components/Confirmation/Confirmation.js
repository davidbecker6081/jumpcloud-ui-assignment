import React from 'react'
import './confirmation.css'

const Confirmation = ({ deleteUser, toggleDeleteUser }) => (
    <article className='confirmation-popup'>
        <p>Are you sure you want to delete this user?</p>
        <div className='confirmation-popup-btn-container'>
            <button className='confirmation-popup-delete' onClick={() => deleteUser()}>Delete</button>
            <button className='confirmation-popup-close' onClick={() => toggleDeleteUser()}>Cancel</button>
        </div>
    </article>
)

export default Confirmation