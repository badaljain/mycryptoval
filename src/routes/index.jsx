import React from 'react'
import { Route } from 'react-router-dom'

import Home from 'components/home'
import Portfolio from 'components/user/portfolio'

const Routes = () => (
    <div>
        <Route exact path='/' component={Home} />
        <Route path='/home' component={Home} />
        <Route path='/user/portfolio' component={Portfolio} />
    </div>
)

export default Routes