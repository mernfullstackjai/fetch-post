import React, { Component } from 'react'

export class NoonGreetComponent extends Component {
  render() {
    return (
      <p>Good Noon {this.props.firstname} {this.props.lastname}</p>
    )
  }
}

export default NoonGreetComponent