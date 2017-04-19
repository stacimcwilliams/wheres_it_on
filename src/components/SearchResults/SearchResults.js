import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './SearchResults.css';

class SearchResults extends Component {

  handleClick(showId) {
    this.props.fetchSingleResult(showId)
  }

  componentWillReceiveProps(args) {
    console.log('results receive props',args);
  }

  render() {
    console.log('rendering search results');
    console.log('hbo',this.props.shows);
    const { results } = this.props
    const content = Object.keys(results).map((result) => {
      // let onItemClick = this.handleClick(shows[show].id)
      return(
        <div className="movie-container" key={result}>
          <NavLink to='/summary'>
          <img className="poster-card" onClick={this.handleClick.bind(this,results[result].id)} src={results[result].poster_120x171} />
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
// <p className="show-title">{shows[show].title}</p>
