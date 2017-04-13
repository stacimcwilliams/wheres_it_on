import React, { Component } from 'react';
// import { Route } from 'react-router-dom';

class Welcome extends Component {

  componentDidMount(dispatch) {
    this.props.fetchSearchContent();
  }

render() {
  console.log(this.props.content);
  return(
    <div>
      "hi"
    </div>
  )
}
}
export default Welcome;






// <div>
//   {content.map(show => {
//     return (
//       <div>
//         { show.posters }
//       </div>
//     )
//   })}
//   <input placeholder="Search Content"/>
// </div>
