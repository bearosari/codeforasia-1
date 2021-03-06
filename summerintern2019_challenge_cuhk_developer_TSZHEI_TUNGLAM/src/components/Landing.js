import React, { Component } from 'react'
import { Link } from 'react-router-dom'

/* The landing bar on top of the page */
class Landing extends Component {
  render() {
    return (
      <div className="container">
        <div className="jumbotron mt-5">
          <div className="col-sm-8 mx-auto">
            <h1 className="text-center">WELCOME</h1>
          </div>
        </div>
        <Link to="/Gallery" className="nav-link">
          Sign in as guest
        </Link>
      </div>

    )
  }
}

export default Landing
