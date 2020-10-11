import Axios from "axios";
import AuthSession from "../utils/AuthSession";
import * as consts from "../config/constants.js";

class AuthService {
  apiURL = consts.API_BASE_URL;

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
    //url building sample
    let reqURL = `${this.apiURL}auth/login/username=${username}&password=${password}/`;
    return Axios({
      method:"POST",
      url: reqURL
    });
  }

  handleRegister({ username, email, password }) {
    let reqURL = `${this.apiURL}auth/register/username=${username}&password=${password}&email=${email}`
    return Axios({
      method:"POST",
      url: reqURL
    });
  }
}

export default new AuthService();
