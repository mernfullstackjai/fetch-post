import React, { Component } from 'react'

export class CounterComponent extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count : 0
      }
    }
    incrementfunction=()=>{
        this.setState({
            count : this.state.count+1
        })
    }
    decrementfunction=()=>{
        this.setState({
            count:this.state.count-1
        })
    }
  render() {
    console.log("render")
    return (
      <React.Fragment>
        <button onClick={this.decrementfunction}> -</button>
        {this.state.count}
        <button onClick={this.incrementfunction}> +</button>

      </React.Fragment>
    )
  }
}

export default CounterComponent

