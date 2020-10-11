import React from "react";
import AuthSession from "../utils/AuthSession";
import Logo from "../assets/logo.JPG";
import "./styles/HomeStyle.css";
import VideoPlayerComponent from "../components/VideoPlayerComponent";

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

      <div className="items">
        <VideoPlayerComponent
          url="https://www.youtube.com/watch?v=DwDlR6FYw8w&ab_channel=SoundsFromTheCorner"
          title="Raisa Live In Lapangan Banteng | Sounds From The Corner"
          description="Raisa Andriana, known by her mononym Raisa, is an Indonesian singer-songwriter. 
          She became publicly known for her song titled 'Serba Salah'."
        />
        <VideoPlayerComponent
          url="https://www.youtube.com/watch?v=0_hPgkPutc0&ab_channel=88rising"
          title="NIKI | Head In The Clouds Festival 2019"
          description="Nicole Zefanya, known professionally as NIKI, is an Indonesian singer, 
          songwriter and record producer, currently based in the United States. She is signed 
          with the record label 88rising."
        />
        <VideoPlayerComponent
          url="https://www.youtube.com/watch?v=jYBMlYheLXo&ab_channel=%E5%93%88%E6%A0%BC%E9%87%8C%E5%A4%AB%E6%96%AF%E6%B2%83%E4%BC%A6"
          title="Blackpink | TOKYO DOME World Tour"
          description="Blackpink is a South Korean girl group formed by YG Entertainment, consisting of members Jisoo, Jennie, Rosé, and Lisa. '
          The group debuted in August 2016 with their single album Square One, which featured 'Whistle' and 'Boombayah', their first number-one hits on South Korea's Gaon Digital Chart and the Billboard World Digital Song Sales chart, respectively."
        />
        <VideoPlayerComponent
          url="https://www.youtube.com/watch?v=pjFX8lT9cew&ab_channel=BTSMAPOFTHESOULTOUR"
          title="BTS | World Tour 'Love Yourself: Speak Yourself' - Japan Edition"
          description="BTS, also known as the Bangtan Boys, is a seven-member South Korean boy band 
          that began formation in 2010 and debuted in 2013 under Big Hit Entertainment. 
          The septet—composed of RM, Jin, Suga, J-Hope, Jimin, V, and Jungkook—co-writes 
          and co-produces much of their own output. "
        />
      </div>

      <div className="greetingBox inline-block justify-content-center">
        <h1>Stay tune, more exciting features are coming soon! :D</h1>
      </div>
    </div>
  );
}

export default HomePage;
