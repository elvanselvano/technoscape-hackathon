import Axios from "axios";
import AuthSession from "../utils/AuthSession";

class AuthService {
  apiURL = process.env.REACT_APP_API_URL;

  username = process.env.REACT_APP_AUTH_HEADER_USERNAME;

  password = process.env.REACT_APP_AUTH_HEADER_PASSWORD;

  createBasicAuthToken(username, password) {
    return `Basic ${window.btoa(`${username}:${password}`)}`;
  }

  setupAxiosInterceptors(basicAuthHeader) {
    Axios.interceptors.request.use((config) => {
      if (AuthSession.handleIsLoggedIn())
        config.header.authorization = basicAuthHeader;
      return config;
    });
  }

  handleLogin({ username, password }) {
    return Axios.post(
      `${this.apiURL}/auth/login`,
      {
        headers: {
          authorization: this.createBasicAuthToken(
            this.username,
            this.password
          ),
        },
      },
      {
        username,
        password,
      }
    );
  }

  handleRegister({ username, email, password }) {
    return Axios.post(`${this.apiURL}/auth/register`, {
      username,
      email,
      password,
    });
  }
}

export default new AuthService();
