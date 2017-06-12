import React, { PureComponent, PropTypes } from 'react'
import Header from './Header'
import Footer from '../Footer'
import styled from 'styled-components'

const Wrapper = styled.div`
  margin-top: 224px;
`

class Layout extends PureComponent {
  static propTypes = {
    className: PropTypes.string
  }

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
