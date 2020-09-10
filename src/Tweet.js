import React, { Component } from 'react'

class Tweet extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className='tweet'>
        <h3>{ this.props.name }</h3>
        <p>{ this.props.message }</p>
        <h3>{ this.props.likes }</h3>
      </div>
    ); 
  }
}

export default Tweet;