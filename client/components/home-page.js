import React, { Component } from 'react'
import axios from 'axios'

export default class UserHome extends Component {

  render() {
    return(
      <div>
        <h1>Job_Quest</h1>
        <h3>{this.state.data}</h3>
      </div>
    )
  }
}
