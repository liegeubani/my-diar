
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Demo from '../Components/Demo';
import Login from '../Components/login'


const Routes = () => {

  return (
    <Router>
      <Switch>
        <Route exact path="/demo">
          <Demo />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
      </Switch>
    </Router>
  )
}

export default Routes;