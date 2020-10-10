import React, { Component } from "react";
import { Route, Redirect, withRouter } from "react-router-dom";
import AuthService from "../utils/AuthSession";

class AuthenticatedRoute extends Component {
  constructor(props) {
    super();
    this.state = {};
  }

  render() {
    const isAuthenticated = AuthService.handleIsLoggedIn();

    if (isAuthenticated) {
      return <Route {...this.props} />;
    }
    return <Redirect to="/auth" />;
  }
}

export default withRouter(AuthenticatedRoute);
