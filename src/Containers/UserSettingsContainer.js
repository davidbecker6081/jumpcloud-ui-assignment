import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {
  createNewUser
} from '../Actions/userActions'

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      createNewUser
    },
    dispatch
  )

export default connect(null, mapDispatchToProps)