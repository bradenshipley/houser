import React from "react"
import { Switch, Route } from "react-router-dom"
import Dashboard from "./component/Dashboard"
import Wizard from "./component/Wizard"
import House from "./component/House"

export default (
  <Switch>
    <Route path='/wizard' component={Wizard} />
    <Route path='/house/:id' component={House} />
    <Route exact path='/' component={Dashboard} />
  </Switch>
)
