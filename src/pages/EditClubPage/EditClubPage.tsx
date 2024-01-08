import { Box, Button, Grid, Paper, TextField } from "@mui/material";
import { useNavigate, useParams } from "react-router";
import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import EditClubRequest from "../../models/CreateClubRequest";
import EditClubResponse from "../../models/EditClubResponse";
import ClubDetailsResponse from "../../models/ClubDetailsResponse";

const EditClubPage = () => {
  const [clubName, setClubName] = useState<string>("");
  const [description, setDescription] = useState<string>("");

  const { clubID } = useParams();
  const navigate = useNavigate();

  const getClubDetails = async () => {
    const response = await axios.get<ClubDetailsResponse[]>(
      `http://localhost:8080/clubs/${clubID}`
    );

    if (response.status === 200) {
      const { ClubName, Description } = response.data[0];

      setClubName(ClubName);
      setDescription(Description);
    }
  };

  const handleSubmit = async (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();

    const request: EditClubRequest = {
      clubName,
      description,
    };

    const response = await axios.put<
      EditClubRequest,
      AxiosResponse<EditClubResponse>
    >(`http://localhost:8080/clubs/${clubID}`, request);

    if (response.status === 200) {
      navigate("/home/");
    }
  };

  useEffect(() => {
    getClubDetails();
  }, []);

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
            <h2>Edit a Book Club</h2>
            <form>
              <TextField
                margin="normal"
                required
                fullWidth
                id="editBookClubName"
                label="Book Club Name"
                name="editBookClubName"
                value={clubName}
                onChange={(e) => setClubName(e.target.value)}
                autoComplete="BookClubName"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="editBookClubDescription"
                label="Description"
                name="editBookClubDescription"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                autoComplete="BookDescription"
                autoFocus
              />
              <Button variant="contained" type="submit" onClick={handleSubmit}>
                Edit book club
              </Button>
            </form>
          </div>
        </Box>
      </Grid>
    </Grid>
  );
};

export default EditClubPage;
