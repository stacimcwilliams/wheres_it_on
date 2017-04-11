import { connect } from 'react-redux';
import { bindActionCreator } from 'redux';

import * as actions from '../../actions';
import Welcome from './Welcome';


const mapStateToProps = state => {
  return state;
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators(actions, dispatch)
}

const WelcomeContainer = connect(mapStateToProps, mapDispatchToProps)(Welcome)

export default WelcomeContainer
