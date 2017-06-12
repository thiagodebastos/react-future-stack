import React from 'react'
import Layout from '../../components/Layout'
import Link from '../../components/Link'
import { title, html } from './index.md'

class HomePage extends React.Component {
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
        <h4>Components</h4>
        <ul>
          <li>
            <Link to="/counter">MobX Counter</Link>
          </li>
        </ul>
      </Layout>
    )
  }
}

export default HomePage
