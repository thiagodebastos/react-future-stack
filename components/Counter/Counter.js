import { observable } from 'mobx'
import { observer, inject } from 'mobx-react'
import React, { Component } from 'react'
import Button from '../Button'

@inject(['counter'])
@observer
class Counter extends Component {
  render() {
    return (
      <div>
        Counter: {this.props.counter.count} <br />
        <Button onClick={this.handleInc} primary> + </Button>
        <Button onClick={this.handleDec}> - </Button>
      </div>
    )
  }

  handleInc = () => {
    this.props.counter.increment()
  }
  handleDec = () => {
    this.props.counter.decrement()
  }
}

export default Counter
