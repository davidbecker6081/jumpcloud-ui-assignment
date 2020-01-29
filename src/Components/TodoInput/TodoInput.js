import React from 'react'
import TodoInputContainer from '../../Containers/TodoInputContainer'
import './todoInput.css'

class TodoInput extends React.Component {
    constructor() {
        super()
        this.state = {
            input: ''
        }
        this.submitTodo = this.submitTodo.bind(this)
        this.clearInput = this.clearInput.bind(this)
        this.constructTodo = this.constructTodo.bind(this)
    }

    clearInput() {
        this.setState({
            input: ''
        })
    }

    constructTodo(todoInput) {
        return {
            value: todoInput,
            completed: false,
            id: Math.random()
        }
    }

    submitTodo(e) {
        e.preventDefault()
        if (this.state.input) {
            const todo = this.constructTodo(this.state.input)
            this.props.addTodo(todo)
            this.clearInput()
        }
    }

    render() {
        const { input } = this.state
        
        return (
            <form className="todoInput-wrapper">
                <input
                    className="todoInput-addInput"
                    placeholder="Create a Todo"
                    value={input}
                    onChange={(e) => this.setState({ input: e.target.value })}
                />
                <button
                    onClick={(e) => this.submitTodo(e)}
                    disabled={!input}
                >
                    Add Todo
                </button>
            </form>
        )
    }
}

export default TodoInputContainer(TodoInput)