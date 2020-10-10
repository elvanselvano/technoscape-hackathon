import Axios from "axios";
import AuthSession from "../utils/AuthSession";
class UserService {
  apiURL = process.env.REACT_APP_API_URL;

  getAll() {
    return Axios.get(`${this.apiURL}/users/`);
  }

  getByUsername({ username }) {
    return Axios.get(`${this.apiURL}/users/${username}`);
  }

  update({ userToUpdate }) {
    const { username, email, password } = userToUpdate;
    const { username: currentUsername } = AuthSession.handleGetUser();

    return Axios.put(`${this.apiURL}/users/${currentUsername}`, {
      username,
      email,
      password,
    });
  }
}

export default new UserService();
