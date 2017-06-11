import styled from 'styled-components'
import toolbarBG from './assets/toolbar-bg.jpg'

// http://callmenick.com/post/animated-resizing-header-on-scroll

const boxShadowMinimized = `
  0px 2px 4px -1px rgba(0, 0, 0, 0.2),
  0px 4px 5px 0px rgba(0, 0, 0, 0.14),
  0px 1px 10px 0px rgba(0, 0, 0, 0.12)
`
const boxShadowMaximized = `
  0px 0px 0px 0px rgba(0, 0, 0, 0.2),
  0px 0px 0px 0px rgba(0, 0, 0, 0.14),
  0px 0px 0px 0px rgba(0, 0, 0, 0.12)
`

const ToolbarView = styled.div`
  background-color: #3f51b5;
  height: ${props => (props.isExpanded ? '224px' : '56px')};
  width: 100%;
  position: ${props => props.fixed && 'fixed'};
  top: ${props => props.fixed && '0'};
  left: ${props => props.fixed && '0'};
  z-index: ${props => props.fixed && '1'};
  box-shadow: ${props => (props.isExpanded ? boxShadowMaximized : boxShadowMinimized)};
  will-change: box-shadow;
  transition: all .28s cubic-bezier(0.4, 0, 0.2, 1);
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transition: opacity .2s ease;
    opacity: ${props => (props.isExpanded ? 1 : 0)};
    background-image: url(${toolbarBG});
    background-size: cover;
    background-position: center;
    will-change: opacity;
  }
`
export default ToolbarView
