import React, { Component } from 'react'
import Layout from '../../../components/Layout'
import ToDoAppContainer from '../../../containers/ToDoAppContainer'
import { title, html } from './index.md'

class CounterPage extends Component {
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
        <ToDoAppContainer />
      </Layout>
    )
  }
}

export default CounterPage
