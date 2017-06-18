import React from 'react';
import Layout from '../../components/Layout';
import Link from '../../components/Link';
import { title, html } from './index.md';

class DemoAppsHome extends React.Component {
  componentDidMount() {
    document.title = title;
  }

  render() {
    return (
      <Layout>
        <div
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: html }}
        />
        <ul>
          <li><Link to="/demo-apps/counter-app">Redux Counter</Link></li>
          <li><Link to="/demo-apps/todo-app">Redux Todo</Link></li>
        </ul>
      </Layout>
    );
  }
}

export default DemoAppsHome;
