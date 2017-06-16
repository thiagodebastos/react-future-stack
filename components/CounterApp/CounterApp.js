import React, { Component } from 'react'
import Button from '../Button'

class Counter extends Component {
  render() {
    return (
      <div>
        Counter: {this.props.counterApp} <br />
        <Button onClick={this.props.increment} primary> + </Button>
        <Button onClick={this.props.decrement}> - </Button>
      </div>
    )
  }
}

export default Counter
