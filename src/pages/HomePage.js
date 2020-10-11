import React from "react";
import AuthSession from "../utils/AuthSession";
import Logo from "../assets/logo.JPG";
import "./styles/HomeStyle.css";

function HomePage() {
  const { firstName, lastName } = AuthSession.handleGetUser();

  return (
    <div className="home page inline-block container justify-content-center">
      <div className="greetingBox inline-block justify-content-center">
        <h1>Welcome, {`${firstName} ${lastName}`} !</h1>
      </div>
      <div className="imgContainer justify-content-center">
        <img src={Logo} />
      </div>

      <div className="greetingBox inline-block justify-content-center">
        <h1>Stay tune, more exciting features are coming soon! :D</h1>
      </div>
    </div>
  );
}

export default HomePage;
