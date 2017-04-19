import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './SearchResults.css';

class SearchResults extends Component {

  handleClick(showId) {
    this.props.fetchSingleResult(showId)
  }

  render() {
    const { results } = this.props
    const content = Object.keys(results).map((result) => {
      return(
        <div className="movie-container" key={result}>
          <NavLink to='/summary'>
          <img alt="movie-poster" className="poster-card" onClick={this.handleClick.bind(this,results[result].id)} src={results[result].poster_120x171} />
        </NavLink>
      </div>
    )
  })
  return (
    <div>
      <div>
        <NavLink className="main-navlink" to="/">Main</NavLink>
      </div>
      <div className="content-card">
        { content }
      </div>
    </div>
  )
}
}

export default SearchResults
