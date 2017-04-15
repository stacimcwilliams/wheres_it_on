import React, { Component } from 'react';

class SearchResults extends Component {

  render() {
    const { shows } = this.props
    const content = Object.keys(shows).map((show) => {
      console.log(shows[show].title);
      return(
        <div>
          <p>{shows[show].title}</p>
          <img src={shows[show].poster_120x171}/>
        </div>
      )
    })
    return (
      <div>{ content }</div>
    )
  }
}

export default SearchResults
