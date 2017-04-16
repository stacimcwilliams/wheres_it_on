import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as actions from '../../src/actions';
import Summary from '../components/Summary/Summary';


const mapStateToProps = state => {
  return {summary: state.shows}
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators(actions, dispatch)
}

const SummaryContainer= connect(mapStateToProps, mapDispatchToProps)(Summary)

export default SummaryContainer
