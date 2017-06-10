import React, { Component } from 'react'
import Navigation from './Navigation'
import Toolbar from '../Toolbar'
import Link from '../Link'

class Header extends Component {
    componentDidMount() {}

    componentWillUnmount() {}

    render() {
        return (
            <header>
                <div>
                    <Link to="/">
                        React Static Boilerplate
                        {' '}
                    </Link>
                    {' '}
                    <Toolbar>
                        <Navigation />
                    </Toolbar>
                </div>
                {' '}
            </header>
        )
    }
}

export default Header
