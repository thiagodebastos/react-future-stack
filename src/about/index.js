import React from 'react'
import Layout from '../../components/Layout'
import { title, html } from './index.md'

class AboutPage extends React.Component {
    componentDidMount() {
        document.title = title
    }

    render() {
        return (
            <Layout>
                <h1>{title}</h1>
                <div
                    // eslint-disable-next-line react/no-danger
                    dangerouslySetInnerHTML={{ __html: html }}
                />
            </Layout>
        )
    }
}

export default AboutPage
