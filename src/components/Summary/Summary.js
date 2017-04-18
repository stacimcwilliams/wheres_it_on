import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Summary.css';

class Summary extends Component {

getSources() {
  const { summary } = this. props
  console.log(summary);
  Object.keys(summary).map((movie) => {
    let newSource = movie.subscription_web_sources.map((source) => {
      console.log(source);
    })
  })
}
render(){
  const { summary } = this.props
  console.log(summary);

  let single = Object.keys(summary).map((movie, i) => {

    return(
      <div key= {i}>
        <img src={ summary[movie].poster_120x171} />
        <p>{ summary[movie].title }</p>
        <p>{ summary[movie].rating}</p>
        <p>{ summary[movie].release_date}</p>
        <p>{ summary[movie].overview}</p>
        <button onClick={this.getSources.bind(this)}>View Subscription Sources</button>
      </div>
    )
  })




  return (
    <div>
      { single }
      <NavLink className='return-to-main' to='./'>Return to Main Menu</NavLink>
    </div>
  )
}


}


export default Summary
