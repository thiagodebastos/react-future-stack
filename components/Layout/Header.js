import React, { Component } from 'react';
import Link from '../Link';

class Header extends Component {
  componentDidMount() {}

  componentWillUnmount() {}

  render() {
    return (
      <nav className="nav-extended">
        <div className="nav-wrapper">
          <div className="col s12">
            <Link to="/" className="brand-logo">React Future Stack</Link>
            <ul className="right hide-on-med-and-down">
              <li><Link to="/demo-apps">Demo Apps</Link></li>
            </ul>
          </div>
        </div>
        <div className="nav-content">
          <ul className="tabs tabs-transparent">
            <li className="tab">
              {' '}<Link to="/demo-apps/counter-app"> Counter App</Link>
            </li>
            <li className="tab">
              {' '}<Link to="/demo-apps/todo-app"> To Do App</Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Header;
