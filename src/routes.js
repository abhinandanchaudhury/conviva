import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import NoMatch from './components/NoMatch';
import BaseConatiner from "./components/BaseContainer";


export default function Dashboard() {
  return (
    <Router>
        <Switch>
          <Route exact path="/">
            <BaseConatiner />
          </Route>
          <Route path="*">
            <NoMatch />
          </Route>
        </Switch>
    </Router>
  );
}


