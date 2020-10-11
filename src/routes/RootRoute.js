import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import AuthenticatedRoute from "../routes/AuthenticatedRoute";
import AuthPage from "../pages/AuthPage";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import ErrorPage from "../pages/ErrorPage";
import LogoutPage from "../pages/LogoutPage";
import ProfilePage from "../pages/ProfilePage";

import HeaderComponent from "../components/HeaderComponent";
import FooterComponent from "../components/FooterComponent";

import AuthSession from "../utils/AuthSession";
import VideoPlayerComponent from "../components/VideoPlayerComponent";
import "../components/styles/VideoPlayerStyle.css";

class RootRoute extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      fullName: "",
      username: "",
      email: "",
      password: "",
    };
  }

  componentDidMount() {
    if (AuthSession.handleIsLoggedIn()) {
      const {
        fullName,
        username,
        email,
        password,
      } = AuthSession.handleGetUser();
      this.setState({
        isLoggedIn: true,
        fullName: fullName,
        username: username,
        email: email,
        password: password,
      });
    }
  }

  render() {
    const { fullName, username, email, password } = this.state;
    return (
      <Router>
        <HeaderComponent />
        <Switch>
          <AuthenticatedRoute path="/profile" component={ProfilePage} />

          <Route path="/auth/login" component={LoginPage} />
          <Route path="/auth/register" component={RegisterPage} />
          <Route path="/auth" component={AuthPage} />
          <Route path="/logout" exact component={LogoutPage} />

          <AuthenticatedRoute path="/home" component={HomePage} />
          <AuthenticatedRoute path="/" component={HomePage} />
          <Route path="" component={ErrorPage} />
        </Switch>
        <div className="items">
          <VideoPlayerComponent url="https://www.youtube.com/watch?v=f02mOEt11OQ&ab_channel=TheAMPChannel" />
          <VideoPlayerComponent url="https://www.youtube.com/watch?v=f02mOEt11OQ&ab_channel=TheAMPChannel" />
          <VideoPlayerComponent url="https://www.youtube.com/watch?v=f02mOEt11OQ&ab_channel=TheAMPChannel" />
          <VideoPlayerComponent url="https://www.youtube.com/watch?v=f02mOEt11OQ&ab_channel=TheAMPChannel" />
        </div>
        <FooterComponent />
      </Router>
    );
  }
}

export default RootRoute;
