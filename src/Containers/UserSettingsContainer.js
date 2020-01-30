import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {
  createNewUser,
  clearError,
  toggleCreateNewUser,
  toggleUpdateUser
} from '../Actions/userActions'

const mapStateToProps = ({ userReducer }) => ({
  createNewUserWindowOpen: userReducer.createNewUserWindowOpen,
  userToUpdate: userReducer.userToUpdate,
  status: userReducer.status
})

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      createNewUser,
      clearError,
      toggleCreateNewUser,
      toggleUpdateUser
    },
    dispatch
  )

export default connect(mapStateToProps, mapDispatchToProps)