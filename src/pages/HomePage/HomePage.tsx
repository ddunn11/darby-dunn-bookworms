import { useEffect, useState } from "react";
import HomePageClubItem, {
  HomePageClubItemProps,
} from "../../components/HomePageClubItem/HomePageClubItem";
import "./HomePage.scss";
import axios from "axios";
import UserClub from "../../models/UserClub";
import { Button } from "@mui/material";

const HomePage = () => {
  const [clubProps, setClubProps] = useState<HomePageClubItemProps[]>([]);
  const getClubs = async () => {
    // axios call here
    // TODO - Get userID from localstorage
    const response = await axios.get<UserClub[]>(
      `http://localhost:8080/clubs/user/95a34f7f-493e-4f20-9f09-bd414c1f3152`
    );
    // for each club, make a props obj array

    console.log(response.data);
    const clubs = response.data;

    const clubProps = clubs.map((c) => {
      const prop: HomePageClubItemProps = {
        clubID: c.ClubID,
        clubName: c.ClubName,
      };

      return prop;
    });

    setClubProps(clubProps);
  };

  const createClubsFromProps = (): JSX.Element[] => {
    return clubProps.map((p) => (
      <HomePageClubItem clubID={p.clubID} clubName={p.clubName} />
    ));
  };

  useEffect(() => {
    getClubs();
  }, []);

  return (
    <div className="home__page-container">
      <div className="home__content-container">
        <h1>My Book Clubs</h1>
        {createClubsFromProps()}
        <div>
          <Button variant="contained">Create a new club</Button>
        </div>
        <div>
          <Button variant="contained">View all clubs</Button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
