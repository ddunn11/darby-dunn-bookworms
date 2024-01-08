import { useEffect, useState } from "react";
import HomePageClubItem, {
  HomePageClubItemProps,
} from "../../components/HomePageClubItem/HomePageClubItem";
import axios from "axios";
import UserClub from "../../models/UserClub";
import { Button, Container, Grid, Typography } from "@mui/material";
import { getUserIDFromLocalStorage } from "../../helpers/localstorage";
import { CreateButtonContainer, HomePageContainer } from "./StylesHomePage";
import Navbar from "../../components/Navbar/Navbar";

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
        description: c.Description,
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
        description={p.description}
        key={p.clubID}
      />
    ));
  };

  useEffect(() => {
    getClubs();
  }, []);

  return (
    <HomePageContainer>
      <Navbar />
      <div className="home__content-container">
        <Typography variant="h2" sx={{ marginTop: "1rem" }}>
          My Book Clubs
        </Typography>
        <CreateButtonContainer>
          <Button variant="contained" href="/clubs/create-club">
            Create a new club
          </Button>
        </CreateButtonContainer>
        <Container sx={{ py: 8 }} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {createClubsFromProps()}
          </Grid>
        </Container>
      </div>
    </HomePageContainer>
  );
};

export default HomePage;
