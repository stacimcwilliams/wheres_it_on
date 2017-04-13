import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as actions from '../../src/actions';
import Welcome from '../components/Welcome/Welcome';


const mapStateToProps = state => {
  return state;
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators(actions, dispatch)
}

const WelcomeContainer = connect(mapStateToProps, mapDispatchToProps)(Welcome)
export default WelcomeContainer
