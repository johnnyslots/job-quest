import React, { Component } from 'react'
import {BrowserRouter as Router, withRouter, Route, Switch} from 'react-router-dom'
import { UserHome } from './components'

export default class Routes extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path='/' component={UserHome} />
        </Switch>
      </Router>

    )
  }
}
