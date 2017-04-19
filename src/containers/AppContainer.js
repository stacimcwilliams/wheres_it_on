import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as actions from '../../src/actions'
import App from '../components/App/App'

const mapStateToProps = state => {
  return state
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators(actions, dispatch)
}

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App)
export default AppContainer
