import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class SearchResults extends Component {

handleClick(showId) {
  this.props.fetchSingleResult(showId)
}

  render() {
    const { shows } = this.props
    const content = Object.keys(shows).map((show,i ) => {
      let onItemClick = this.handleClick(shows[show].id)
      return(
        <div key={i}>
          <p>{shows[show].title}</p>
        <NavLink to='/summary'><img onClick={onItemClick}  src={shows[show].poster_120x171} /></NavLink>
        </div>
      )
    })
    return (
      <div>
      <NavLink to="/">Main</NavLink>
       { content }
      </div>
    )
  }
}

export default SearchResults
