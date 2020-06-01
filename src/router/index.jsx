import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Login from "../pages/login";
import NoMatch from "../pages/noMatch";
import Home from "../pages/home";
import Admin from "../admin";
import App from "../App";
export default class router extends React.Component {
  render() {
    return (
      <Router>
        <App>
          <Switch>
            <Route path="/login" component={Login} />
            <Route
              path="/"
              render={() => (
                <Admin>
                  <Switch>
                    <Route path="/home" component={Home} />
                    <Route path="/nomatch" component={NoMatch} />
                  </Switch>
                </Admin>
              )}
            />
          </Switch>
        </App>
      </Router>
    );
  }
}
