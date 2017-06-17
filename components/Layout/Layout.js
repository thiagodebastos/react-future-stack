import React, { PureComponent } from 'react'
import styled from 'styled-components'
import Header from './Header'
import Footer from '../Footer'

const Wrapper = styled.div`
  margin-top: 224px;
`

class Layout extends PureComponent {
  componentDidMount() {}

  componentWillUnmount() {}

  render() {
    return (
      <Wrapper>
        <Header />
        <main style={{ background: 'papayawhip', color: 'palevioletred', height: '200vh' }}>
          <div {...this.props} />
          <Footer />
        </main>
      </Wrapper>
    )
  }
}

export default Layout
