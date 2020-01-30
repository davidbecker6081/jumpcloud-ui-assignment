import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {
  getAllUsers,
  toggleDeleteUser,
  deleteUser,
  toggleUpdateUser
} from '../Actions/userActions'

const mapStateToProps = ({ userReducer }) => ({
  users: userReducer.users,
  deleteUserConfirmation: userReducer.deleteUserConfirmation,
  userToDelete: userReducer.userToDelete,
  userToUpdate: userReducer.userToUpdate,
  status: userReducer.status
})

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      getAllUsers,
      toggleDeleteUser,
      deleteUser,
      toggleUpdateUser
    },
    dispatch
  )

export default connect(mapStateToProps, mapDispatchToProps)