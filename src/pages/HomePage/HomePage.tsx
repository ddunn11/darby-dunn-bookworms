import { useEffect, useState } from "react";
import HomePageClubItem, {
  HomePageClubItemProps,
} from "../../components/HomePageClubItem/HomePageClubItem";
import axios from "axios";
import UserClub from "../../models/UserClub";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import { getUserIDFromLocalStorage } from "../../helpers/localstorage";
import { HomePageContainer } from "./StylesHomePage";

const HomePage = () => {
  const [clubProps, setClubProps] = useState<HomePageClubItemProps[]>([]);
  const getClubs = async () => {
    const userID = getUserIDFromLocalStorage();
    const response = await axios.get<UserClub[]>(
      `http://localhost:8080/clubs/user/${userID}`
    );

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
      <HomePageClubItem
        clubID={p.clubID}
        clubName={p.clubName}
        key={p.clubID}
      />
    ));
  };

  useEffect(() => {
    getClubs();
  }, []);

  return (
    <HomePageContainer className="home__page-container">
      <div className="home__content-container">
        <h1>My Book Clubs</h1>
        <Container sx={{ py: 8 }} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {createClubsFromProps()}
          </Grid>
        </Container>
        <div>
          <Button variant="contained" href="/clubs/create-club">
            Create a new club
          </Button>
        </div>
        <div>
          <Button variant="contained">View all clubs</Button>
        </div>
      </div>
    </HomePageContainer>
  );
};

export default HomePage;
