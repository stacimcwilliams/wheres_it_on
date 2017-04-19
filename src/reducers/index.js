import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import { shows,content } from './WelcomeReducer'
import { results } from './SearchResultsReducer'
import { summary } from './SummaryReducer'



const rootReducer = combineReducers({
  router: routerReducer,
  shows,
  results,
  summary
})

export default rootReducer
