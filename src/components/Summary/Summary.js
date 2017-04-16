import React, { Component } from 'react';

class Summary extends Component {



render(){
  console.log(this.props)
  return (
    <div>
      {this.props.summary.title}
    </div>
  )
}


}


export default Summary
