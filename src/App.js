import React, { Component } from "react"

import { connect } from "react-redux"

import routes from "./routes"
import Header from "./component/Header"

import "./App.css"

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Header />
        <div className='routesBOIIIII'>{routes}</div>
      </div>
    )
  }
}
const mapStateToProps = state => state

export default connect(
  mapStateToProps,
  {
    /*whatever functions are used*/
  }
)(App)
