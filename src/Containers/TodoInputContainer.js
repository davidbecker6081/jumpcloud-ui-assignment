import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {
  addTodo
} from '../Actions/todoActions'

const mapStateToProps = ({ todoReducer }) => ({
  todos: todoReducer.todos
})

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      addTodo
    },
    dispatch
  )

export default connect(mapStateToProps, mapDispatchToProps)