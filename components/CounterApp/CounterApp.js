import React, { Component } from 'react'
import Button from '../Button'

class Counter extends Component {
  render() {
    const { increment, decrement } = this.props
    const { count } = this.props.counterApp
    return (
      <div>
        Counter: {count} <br />
        <Button onClick={increment} primary> + </Button>
        <Button onClick={decrement}> - </Button>
      </div>
    )
  }
}

export default Counter
