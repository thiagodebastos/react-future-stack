import styled from 'styled-components'
import toolbarBG from './assets/toolbar-bg.jpg'

// http://callmenick.com/post/animated-resizing-header-on-scroll

const ToolbarView = styled.div.attrs({
  // or we can define dynamic ones
  height: props => (props.isExpanded ? '400px' : '100px')
})`
  background-image: url(${toolbarBG});
  background-size: cover;
  background-position: 50% 50%;
  height: ${props => props.height};
  width: 100%;
  position: ${props => props.fixed && 'fixed'};
  top: ${props => props.fixed && '0'};
  left: ${props => props.fixed && '0'};
  z-index: ${props => props.fixed && '1'};
  transition: all .25s;
`
export default ToolbarView
