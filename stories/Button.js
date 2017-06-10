import React from 'react'
import styled from 'styled-components'

const Button = styled.button`
    border: 1px solid #eee;
    borderRadius: 3;
    backgroundColor: #FFFFFF;
    cursor: pointer;
    fontSize: 15;
    padding: 3px 10px;
    margin: 10;
`

const ButtonWrapper = ({ children, onClick }) =>
    <Button onClick={onClick}>
        {children}
    </Button>

ButtonWrapper.propTypes = {
    children: React.PropTypes.string.isRequired,
    onClick: React.PropTypes.func
}

export default ButtonWrapper
