import React from 'react'
import './error.css'

const Error = ({ error, clearError }) => (
    <article className='error-popup'>
        {error}
        <button onClick={() => clearError()}>X</button>
    </article>
)

export default Error