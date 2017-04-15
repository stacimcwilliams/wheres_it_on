import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import { shows,content } from './WelcomeReducer'
import { results } from './SearchResultsReducer'



const rootReducer = combineReducers({
  router: routerReducer,
  shows,
  results
})

export default rootReducer
