import React from 'react'
import AllTodosContainer from '../../Containers/AllTodosContainer'
import Todo from '../Todo/Todo'
import './allTodos.css'

class AllTodos extends React.Component {
    render() {
        return (
            <section className="allTodos">
                {
                    this.props.todos.map((todo) => 
                        <Todo
                            key={todo.id}
                            todo={todo}
                            onDelete={this.props.deleteTodo.bind(this, todo.id)}
                            completed={todo.completed}
                            onToggleCompleted={this.props.toggleCompleted.bind(this, todo.id)}
                            onUpdateTodo={this.props.updateTodo.bind(this, todo.id)}
                        />
                    )
                }
            </section>
        )
    }
}

export default AllTodosContainer(AllTodos)