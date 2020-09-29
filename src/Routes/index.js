
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Demo from '../Components/Demo';


const Routes = () => {

  return (
    <Router>
      <Switch>
        <Route exact path="/demo">
          <Demo />
        </Route>
      </Switch>
    </Router>
  )
}

export default Routes;