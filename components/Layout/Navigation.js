import React, { Component } from 'react'
import Link from '../Link'

class Navigation extends Component {
    render() {
        return (
            <nav>
                <Link to="/">Home</Link>
                <Link to="/blog">Blog</Link>
                <Link to="/about">About</Link>
            </nav>
        )
    }
}

export default Navigation
