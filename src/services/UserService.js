import Axios from "axios";
import AuthSession from "../utils/AuthSession";
import * as consts from "../config/constants.js";
class UserService {
  apiURL = consts.API_BASE_URL;

  getAll() {
    return Axios.get(`${this.apiURL}/users/`);
  }

  getByUsername({ username }) {
    return Axios.get(`${this.apiURL}/users/${username}`);
  }

  update({ userToUpdate }) {
    const {
      username,
      email,
      password,
      dateOfBirth,
      firstName,
      lastName,
      gender,
    } = userToUpdate;

    let reqURL = `${this.apiURL}auth/update/username=${username}&password=${password}&dateOfBirth=${dateOfBirth}&firstName=${firstName}&lastName=${lastName}&gender=${gender}&email=${email}/`;
    return Axios({
      method: "PUT",
      url: reqURL,
    });
  }
}

export default new UserService();
