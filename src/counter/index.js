import React, { PropTypes } from 'react'
import Layout from '../../components/Layout'
import { title, html } from './index.md'
import Counter from '../../components/Counter'

class CounterPage extends React.Component {
  static propTypes = {}

  componentDidMount() {
    document.title = title
  }

  render() {
    return (
      <Layout>
        <div
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: html }}
        />
        <h4>Counter</h4>
        <Counter />
      </Layout>
    )
  }
}

export default CounterPage
