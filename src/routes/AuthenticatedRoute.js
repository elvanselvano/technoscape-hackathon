import React, { Component } from "react";
import { Route, Redirect, withRouter } from "react-router-dom";
import AuthSession from "../utils/AuthSession";

class AuthenticatedRoute extends Component {
  constructor(props) {
    super();
    this.state = {};
  }

  render() {
    const isAuthenticated = AuthSession.handleIsLoggedIn();

    if (isAuthenticated) {
      return <Route {...this.props} />;
    }
    return <Redirect to="/auth" />;
  }
}

export default withRouter(AuthenticatedRoute);
