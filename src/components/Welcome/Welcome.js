import React, { Component } from 'react';
// import { Route } from 'react-router-dom';

class Welcome extends Component {

  componentDidMount(dispatch) {
    this.props.fetchSearchContent();
  }

render() {
  const { content } = this.props
  return(
    <div>
      {content.map(show => {
        return (
          <div>
            { show.id }
          </div>
        )
      })}
      <input placeholder="Search Content"/>
    </div>

  )
}
}
export default Welcome;
