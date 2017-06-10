import styled from 'styled-components'

const Button = styled.button`
  cursor: pointer;
  fontSize: 1em;
  padding: .25em 1em;
  border-radius: 3px;
  margin: 10px;
  /* Theme Dependent Styles */
  background: ${props => (props.primary ? props.theme.primary : props.theme.secondary) || 'white'};
  color: ${props => (props.primary ? props.theme.secondary : props.theme.primary) || 'white'};
  border: 2px solid ${props => (props.primary ? props.theme.primary : props.theme.primary) || 'palevioletred'};
`

export default Button
