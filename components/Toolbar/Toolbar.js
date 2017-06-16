import React, { Component } from 'react'
import ToolbarView from './ToolbarView'
import ToolbarContent from './ToolbarContent'

let pageTop,
  menu,
  yPos,
  timesRendered = 0
class Toolbar extends Component {
  state = {
    isExpanded: true
  }
  componentDidMount() {
    window.addEventListener('scroll', this.yScroll)
  }

  /* BUG:
    https://stackoverflow.com/a/40969739/3108412
    do not call `setState` when component is unmounted
  */
  yScroll = () => {
    if (window.pageYOffset <= 150 && !this.state.isExpanded) {
      this.setState({
        isExpanded: true
      })
    } else if (window.pageYOffset > 150 && this.state.isExpanded) {
      this.setState({
        isExpanded: false
      })
    }
  }

  render() {
    timesRendered++
    console.log(timesRendered)
    return (
      <ToolbarView isExpanded={this.state.isExpanded} fixed>
        <ToolbarContent />
      </ToolbarView>
    )
  }
}

export default Toolbar
