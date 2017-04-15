import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as actions from '../../src/actions';
import SearchResults from '../components/SearchResults/SearchResults';


const mapStateToProps = state => {
  return state
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators(actions, dispatch)
}

const SearchResultsContainer = connect(mapStateToProps, mapDispatchToProps)(SearchResults)

export default SearchResultsContainer
