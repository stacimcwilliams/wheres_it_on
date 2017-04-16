import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './SearchResults.css';

class SearchResults extends Component {

  handleClick(showId) {
    this.props.fetchSingleResult(showId)
  }

  render() {
    const { shows } = this.props
    const content = Object.keys(shows).map((show) => {
      // let onItemClick = this.handleClick(shows[show].id)
      return(
        <div className="movie-container" key={show}>
          <NavLink to='/summary'>
          <img className="poster-card" onClick={this.handleClick.bind(this,shows[show].id)} src={shows[show].poster_120x171} />
        </NavLink>
      </div>
    )
  })
  return (
    <div className="content-card">
      <NavLink className="main-navlink" to="/">Main</NavLink>
      { content }
    </div>
  )
  }
}

export default SearchResults
// <p className="show-title">{shows[show].title}</p>
