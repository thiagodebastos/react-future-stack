/**
 * React Static Boilerplate
 * https://github.com/kriasoft/react-static-boilerplate
 *
 * Copyright © 2015-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react'
import history from '../history'
import Link from '../../components/Link'

class ErrorPage extends React.Component {
  componentDidMount() {
    document.title = this.props.error && this.props.error.status === 404 ? 'Page Not Found' : 'Error'
  }

  goBack = event => {
    event.preventDefault()
    history.goBack()
  }

  render() {
    if (this.props.error) console.error(this.props.error) // eslint-disable-line no-console

    const [code, title] = this.props.error && this.props.error.status === 404
      ? ['404', 'Page not found']
      : ['Error', 'Oups, something went wrong']

    return (
      <div>
        <main>
          <h1>{code}</h1>
          <p>{title}</p>
          {code === '404' &&
            <p>
              The page you&apos;re looking for does not exist or an another error occurred.
            </p>}
          <p>
            <a href="/" onClick={this.goBack}>Go back</a>
            , or head over to the&nbsp;
            <Link to="/">home page</Link>
            to choose a new direction.
          </p>
        </main>
      </div>
    )
  }
}

export default ErrorPage
