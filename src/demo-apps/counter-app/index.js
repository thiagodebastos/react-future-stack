import React from 'react'
import Layout from '../../../components/Layout'
import CounterAppContainer from '../../../containers/CounterAppContainer'
import { title, html } from './index.md'

class CounterPage extends React.Component {
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
        <CounterAppContainer />
      </Layout>
    )
  }
}

export default CounterPage
