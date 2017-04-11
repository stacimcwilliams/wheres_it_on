import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import { tv } from './WelcomeReducer'

const rootReducer = combineReducers({
  router: routerReducer,
  tv
})

export default rootReducer
