import React, { Component } from 'react';
import {  NavLink } from 'react-router-dom';
import { Route } from 'react-router-dom';
import SearchResultsContainer from '../../containers/SearchResultsContainer'
import './Welcome.css'

class Welcome extends Component {
  constructor() {
    super()
    this.state = {
      query: ''
    }
  }
  componentWillMount() {
    this.props.fetchSearchContent();
    this.props.fetchRandomTv();
  }

  handleInput(e) {
    this.setState({
      query: e.target.value
    })
  }

  handleClick() {
    this.props.fetchSearchContent(this.state.query)
  }

  render() {
    let { shows } = this.props
    let hboShows = shows.map(show => <img className="welcome-page" src={show.artwork_208x117}/>)
    return(
      <div className='welcome-container'>
        <div>
          <input className="search-input" placeholder="search" onChange={this.handleInput.bind(this)}/>
          <NavLink className="submit-navlink" onClick={this.handleClick.bind(this)} to='/results' >Submit</NavLink>
        </div>
        {hboShows &&
          hboShows
        }

      </div>
    )
  }
}
export default Welcome;
