import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import WelcomeContainer from '../../containers/WelcomeContainer';
import SearchResultsContainer from '../../containers/SearchResultsContainer';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2 className='title-header'>Where's it on</h2>
        </div>
        <p className="App-intro">
        </p>
        <Route exact path='/' component={ WelcomeContainer } />
        <Route exact path='/results'  component= {SearchResultsContainer} />

      </div>
    );
  }
}

export default App;
