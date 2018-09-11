import React, { Component } from 'react'
import {BrowserRouter as Router, withRouter, Route, Switch} from 'react-router-dom'
import { HomePage } from './components'

export default class Routes extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path='/' component={HomePage} />
        </Switch>
      </Router>

    )
  }
}
