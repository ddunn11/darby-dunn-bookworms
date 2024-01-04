import HomePageClubItem from "../../components/HomePageClubItem/HomePageClubItem";
import "./HomePage.scss";
import axios from "axios";

const HomePage = () => {
  return (
    <div className="home__page-container">
      <div className="home__content-container">
        <h1>My Book Clubs</h1>
        <HomePageClubItem clubID="test" clubName="test name" />
      </div>
    </div>
  );
};

export default HomePage;
