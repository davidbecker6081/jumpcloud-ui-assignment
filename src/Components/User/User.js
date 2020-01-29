import React from 'react'
import './user.css'

class Todo extends React.Component {
    render() {
        return (
            <article className="user">
                <div>
                    {this.props.user}
                </div>
            </article>
        )
    }
}

export default Todo