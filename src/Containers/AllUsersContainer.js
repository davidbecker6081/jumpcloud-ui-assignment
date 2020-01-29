import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {
  getAllUsers
} from '../Actions/userActions'

const mapStateToProps = ({ userReducer }) => ({
  users: userReducer.users,
  status: userReducer.status
})

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      getAllUsers
    },
    dispatch
  )

export default connect(mapStateToProps, mapDispatchToProps)