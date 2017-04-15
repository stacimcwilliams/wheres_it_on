import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Route } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import { ConnectedRouter, routerMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk';
// import WelcomeContainer from '../src/containers/WelcomeContainer'
// import App from '../components/App/App';
import AppContainer from '../src/containers/AppContainer'
import './index.css';
import rootReducer from './reducers/index'
import createHistory from 'history/createBrowserHistory';

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

const history = createHistory();

const middleware = [routerMiddleware(history), thunk]

const store = createStore(rootReducer, devTools, applyMiddleware(...middleware))


const router = (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Route path='/' component={ AppContainer }/>
  </ConnectedRouter>
  </Provider>
);


ReactDOM.render(router, document.getElementById('root'))
