import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import { shows } from './WelcomeReducer'

const rootReducer = combineReducers({
  router: routerReducer,
  shows
})

export default rootReducer
