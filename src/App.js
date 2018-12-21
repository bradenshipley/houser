import React, { Component } from "react"
import axios from "axios"
import { connect } from "react-redux"
import "./App.css"

class App extends Component {
  componentDidMount() {
    axios
      .get("/")
      .then(res => {
        console.log(res.data)
      })
      .catch(err => {
        console.log(err)
      })
  }
  render() {
    return (
      <div className='App'>
        <header className='App-header'>
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className='App-link'
            href='https://reactjs.org'
            target='_blank'
            rel='noopener noreferrer'
          >
            Learn React
          </a>
        </header>
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
