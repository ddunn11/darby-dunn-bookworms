import { Box, Button, Grid, Paper, TextField } from "@mui/material";
import { useNavigate } from "react-router";
import axios, { AxiosResponse } from "axios";
import { getUserIDFromLocalStorage } from "../../helpers/localstorage";
import { useEffect, useState } from "react";
import UserDetails from "../../models/UserDetails";
import EditUserRequest from "../../models/EditUserRequest";
import EditUserResponse from "../../models/EditUserResponse";

const EditUserPage = () => {
  const [name, setName] = useState<string>("");
  const [username, setUsername] = useState<string>("");

  const navigate = useNavigate();
  const userID = getUserIDFromLocalStorage();

  const getUserDetails = async () => {
    const response = await axios.get<UserDetails[]>(
      `http://localhost:8080/users/${userID}`
    );

    if (response.status === 200) {
      const { Username, Name } = response.data[0];

      setName(Name);
      setUsername(Username);
    }
  };

  const handleSubmit = async (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();

    const request: EditUserRequest = {
      name,
      username,
    };

    const response = await axios.put<
      EditUserRequest,
      AxiosResponse<EditUserResponse>
    >(`http://localhost:8080/users/${userID}`, request);

    if (response.status === 200) {
      navigate("/home");
    }
  };

  useEffect(() => {
    getUserDetails();
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
            <h2>Edit user</h2>
            <form>
              <TextField
                margin="normal"
                required
                fullWidth
                id="editName"
                label="Name"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                autoComplete="name"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="editUsername"
                label="Username"
                name="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                autoComplete="username"
                autoFocus
              />
              <Button variant="contained" type="submit" onClick={handleSubmit}>
                Update user
              </Button>
            </form>
          </div>
        </Box>
      </Grid>
    </Grid>
  );
};

export default EditUserPage;
