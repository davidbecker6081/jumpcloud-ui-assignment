import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {
  createNewUser,
  clearError
} from '../Actions/userActions'

const mapStateToProps = ({ userReducer }) => ({
  status: userReducer.status
})

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      createNewUser,
      clearError
    },
    dispatch
  )

export default connect(mapStateToProps, mapDispatchToProps)