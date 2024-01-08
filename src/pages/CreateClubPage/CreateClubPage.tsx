import { Box, Button, Grid, Paper, TextField } from "@mui/material";
import { useNavigate } from "react-router";
import CreateClubRequest from "../../models/CreateClubRequest";
import axios, { AxiosResponse } from "axios";
import CreateClubResponse from "../../models/CreateClubResponse";
import JoinClubRequest from "../../models/JoinClubRequest";
import JoinClubResponse from "../../models/JoinClubResponse";
import ClubRoles from "../../models/ClubRoles";
import { getUserIDFromLocalStorage } from "../../helpers/localstorage";
import { useState } from "react";
const BASE_URL = import.meta.env.VITE_BASE_URL;

const CreateClubPage = () => {
  const [clubName, setClubName] = useState<string>("");
  const [description, setDescription] = useState<string>("");

  const navigate = useNavigate();

  const handleSubmit = async (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();

    const request: CreateClubRequest = {
      clubName,
      description,
    };

    const response = await axios.post<
      CreateClubRequest,
      AxiosResponse<CreateClubResponse>
    >("${BASE_URL}/clubs", request);

    if (response.status === 200) {
      const clubData = response.data;
      const userID = getUserIDFromLocalStorage();
      joinClub(userID, clubData.clubID);
    }
  };

  //user that creates the club should also join as admin
  const joinClub = async (userID: string, clubID: string) => {
    const request: JoinClubRequest = {
      userID,
      role: ClubRoles.Admin,
    };

    const response = await axios.post<
      JoinClubRequest,
      AxiosResponse<JoinClubResponse>
    >(`${BASE_URL}clubs/join/${clubID}`, request);

    if (response.status === 200) {
      // navigate to new club
      navigate(`/clubs/${clubID}`);
    }
  };

  return (
    <Grid container component="main" sx={{ height: "100vh" }}>
      <Grid
        item
        xs={false}
        sm={4}
        md={7}
        sx={{
          backgroundImage: "url(https://source.unsplash.com/random?book)",
          backgroundRepeat: "no-repeat",
          backgroundColor: (t) =>
            t.palette.mode === "light"
              ? t.palette.grey[50]
              : t.palette.grey[900],
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <Box
          sx={{
            my: 8,
            mx: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div>
            <h2>Create a Book Club</h2>
            <form>
              <TextField
                margin="normal"
                required
                fullWidth
                id="newBookClubName"
                label="Book Club Name"
                name="newBookClubName"
                value={clubName}
                onChange={(e) => setClubName(e.target.value)}
                autoComplete="newBookClubName"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="newBookClubDescription"
                label="Description"
                name="newBookClubDescription"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                autoComplete="newBookDescription"
                autoFocus
              />
              <Button variant="contained" type="submit" onClick={handleSubmit}>
                Create new book club
              </Button>
            </form>
          </div>
        </Box>
      </Grid>
    </Grid>
  );
};

export default CreateClubPage;
