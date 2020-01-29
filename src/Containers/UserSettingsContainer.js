import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {
  createNewUser,
  clearError,
  toggleCreateNewUser
} from '../Actions/userActions'

const mapStateToProps = ({ userReducer }) => ({
  createNewUserWindowOpen: userReducer.createNewUserWindowOpen,
  status: userReducer.status
})

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      createNewUser,
      clearError,
      toggleCreateNewUser
    },
    dispatch
  )

export default connect(mapStateToProps, mapDispatchToProps)