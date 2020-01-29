import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {
  deleteTodo,
  toggleCompleted,
  updateTodo
} from '../Actions/todoActions'

const mapStateToProps = ({ todoReducer }) => ({
  todos: todoReducer.todos
})

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      deleteTodo,
      toggleCompleted,
      updateTodo
    },
    dispatch
  )

export default connect(mapStateToProps, mapDispatchToProps)