import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as actions from '../../src/actions'
import App from '../components/App/App'

const mapStateToProps = state => {
  return state
}

const AppContainer = connect(mapStateToProps, null)(App)
export default AppContainer
