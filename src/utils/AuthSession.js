class AuthSession {
  handleLoginSucceed(credentials) {
    sessionStorage.setItem("authenticatedUser", JSON.stringify(credentials));
  }

  handleLoginFailed() {
    sessionStorage.removeItem("authenticatedUser");
  }

  handleLogoutSucceed() {
    sessionStorage.removeItem("authenticatedUser");
  }

  handleLogoutFailed() {
    sessionStorage.removeItem("authenticatedUser");
  }

  handleIsLoggedIn() {
    const user = this.handleGetUser();
    return user != null;
  }

  handleGetUser() {
    const user = JSON.parse(sessionStorage.getItem("authenticatedUser"));
    return user;
  }
}

export default new AuthSession();
