import React, { Component } from 'react';
import Layout from '../../../components/Layout';
import TodoAppContainer from '../../../containers/TodoAppContainer';
import { title, html } from './index.md';

class TodoPage extends Component {
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
        <h4>Todo App</h4>
        <TodoAppContainer />
      </Layout>
    );
  }
}

export default TodoPage;
