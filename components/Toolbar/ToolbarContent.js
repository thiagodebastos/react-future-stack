import React, { Component } from 'react'
import Link from '../Link'
import styled from 'styled-components'

const s = {
  rowHeight: '64px',
  mobileRowHeight: '56px',
  padding: '20px 28px',
  mobilePadding: '16px',
  mobileBreakpoint: '599px'
}

const ToolBarRow = styled.div`
    display: flex;
    position: relative;
    width: 100%;
    height: auto;
    min-height: ${s.rowHeight};
    padding: ${s.mobilePadding};
    box-sizing: border-box;

    @media (max-width: ${s.mobileBreakpoint}) {
      min-height: ${s.mobileRowHeight};
      padding: ${s.mobilePadding};
    }
`

const ToolBarSection = styled.section`
    display: inline-flex;
    flex: 1;
    align-items: flex-start;
    justify-content: center;
    min-width: 0;
    z-index: 1;
    ${props => props.vertical && 'flex-direction: column;'}
    ${props => props.test && 'color: red;'}
`

class ToolbarContent extends Component {
  render(props) {
    return (
      <ToolBarRow>
        <ToolBarSection>
          {this.props.children}
        </ToolBarSection>
      </ToolBarRow>
    )
  }
}

export default ToolbarContent
