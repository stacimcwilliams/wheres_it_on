import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Summary extends Component {
render(){
  const { summary } = this.props
  console.log(summary);

  let single = Object.keys(summary).map((movie) => {
    return(
      <div>
        <img src={ summary[movie].poster_120x171} />
        <p>{ summary[movie].title }</p>
        <p>{ summary[movie].rating}</p>
        <p>{ summary[movie].release_date}</p>
        <p>{ summary[movie].overview}</p>
      </div>
    )
  })
  return (
    <div>
      { single }
      <NavLink to='./'></NavLink>
    </div>
  )
}


}


export default Summary
