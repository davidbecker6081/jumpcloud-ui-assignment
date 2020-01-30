import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {
  getAllUsers,
  toggleDeleteUser,
  deleteUser
} from '../Actions/userActions'

const mapStateToProps = ({ userReducer }) => ({
  users: userReducer.users,
  deleteUserConfirmation: userReducer.deleteUserConfirmation,
  userToDelete: userReducer.userToDelete,
  status: userReducer.status
})

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      getAllUsers,
      toggleDeleteUser,
      deleteUser
    },
    dispatch
  )

export default connect(mapStateToProps, mapDispatchToProps)