import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";

import AuthSession from "../utils/AuthSession";

class HeaderComponent extends Component {
  constructor() {
    super();
    this.state = {};
  }

  handleLogout = () => {
    AuthSession.handleLogoutSucceed();
    this.props.history.replace("/logout");
  };

  handleAuthenticate = () => {
    this.forceUpdate();
  };

  handleMyShop = () => {
    const { username } = AuthSession.handleGetUser();
    this.props.history.push(`/shops/${username}`);
  };

  handleProfile = () => {
    const { username } = AuthSession.handleGetUser();
    this.props.history.push(`/profile/${username}`);
  };

  handleHome = () => {
    this.props.history.push(`/home`);
  };

  render() {
    const isLoggedIn = AuthSession.handleIsLoggedIn();

    return (
      <div className="mb-5">
        <header>
          <nav className="navbar navbar-expand-md ">
            <div className="navbar-brand">
              <Link to={isLoggedIn ? `/home` : "/auth"}>Concertbite</Link>
            </div>
            <ul className="navbar-nav">
              {isLoggedIn && (
                <>
                  <li className="nav-link">
                    <Link onClick={() => this.handleHome()}>Home</Link>
                  </li>
                  <li className="nav-link">
                    <Link onClick={() => this.handleProfile()}>Profile</Link>
                  </li>
                </>
              )}
            </ul>
            <ul className="navbar-nav navbar-collapse justify-content-end">
              {!isLoggedIn && (
                <li className="nav-link">
                  <Link onClick={() => this.handleAuthenticate()} to="/auth">
                    Authenticate
                  </Link>
                </li>
              )}
              {isLoggedIn && (
                <li className="nav-link">
                  <Link onClick={() => this.handleLogout()}>Logout</Link>
                </li>
              )}
            </ul>
          </nav>
          <hr />
        </header>
      </div>
    );
  }
}

export default withRouter(HeaderComponent);
