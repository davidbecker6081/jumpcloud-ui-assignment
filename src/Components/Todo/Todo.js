import React from 'react'
import './todo.css'

class Todo extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            todoValue: props.todo.value
        }
        this.handleKeyPress = this.handleKeyPress.bind(this)
        this.focusAddTodoInput = this.focusAddTodoInput.bind(this)
        this.updateTodo = this.updateTodo.bind(this)
    }

    updateTodo(editableField, updateValue) {
        const inputIsEmpty = !updateValue.trim().length
        if (inputIsEmpty) {
            return this.props.onDelete()
        }

        this.props.onUpdateTodo(updateValue)
        editableField.currentTarget.readOnly = true
        this.focusAddTodoInput()
    }

    focusAddTodoInput() {
        document.querySelector('.todoInput-addInput').focus()
    }

    handleKeyPress(e) {
        if (e.key === 'Enter') {
            this.updateTodo(e, e.target.value)
        }
        if (e.key === 'Escape') {
            this.setState({ todoValue: this.props.todo.value })
            this.focusAddTodoInput()
        }
    }

    render() {
        const { onDelete, completed, onToggleCompleted } = this.props
        const completedClass = completed ? 'todo-value--completed' : ''
        return (
            <article className="todo">
                <input type="checkbox" checked={completed} onChange={() => onToggleCompleted()}/>
                <input
                    type ="text"
                    className={`todo-value ${completedClass}`}
                    readOnly={true}
                    onDoubleClick={(e) => {
                        e.currentTarget.readOnly = false
                    }}
                    onBlur={e => this.updateTodo(e, e.target.value)}
                    value={this.state.todoValue}
                    onChange={(e) => this.setState({ todoValue: e.target.value })}
                    onKeyUp={e => this.handleKeyPress(e)}
                />
                <button className="todo-delete" onClick={() => onDelete()}>X</button>
            </article>
        )
    }
}

export default Todo