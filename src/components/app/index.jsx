import React, { Component } from 'react'
import Routes from 'routes'
import Layout from 'components/layout'

class App extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <Layout>
                <Routes />
            </Layout>
        )
    }
}

export default App