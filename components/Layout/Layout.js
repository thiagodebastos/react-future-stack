import React, { PureComponent, PropTypes } from 'react'
import Header from './Header'
import Footer from '../Footer'

class Layout extends PureComponent {
  static propTypes = {
    className: PropTypes.string
  }

  componentDidMount() {}

  componentWillUnmount() {}

  render() {
    return (
      <div>
        <Header />
        <main style={{ background: 'papayawhip', color: 'palevioletred', height: '200vh' }}>
          <div {...this.props} />
          <Footer />
        </main>
      </div>
    )
  }
}

export default Layout
