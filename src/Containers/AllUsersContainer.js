import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {
  getAllUsers
} from '../Actions/userActions'

const mapStateToProps = ({ userReducer }) => ({
  users: userReducer.users
})

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      getAllUsers
    },
    dispatch
  )

export default connect(mapStateToProps, mapDispatchToProps)