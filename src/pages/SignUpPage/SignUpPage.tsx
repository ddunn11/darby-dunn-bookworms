import { Box, Button, Grid, Paper, TextField } from "@mui/material";
import {
  SignUpPageContainer,
  SignUpPageHeaderContainer,
  SignUpPageHeader,
  StyledLogoImg,
} from "./StylesSignUp";
import logo from "../../assets/images/bookworm-logo.png";
import { useState } from "react";
import { useNavigate } from "react-router";
import axios, { AxiosResponse } from "axios";
import CreateAccountRequest from "../../models/CreateAccountRequest";
import CreateAccountResponse from "../../models/CreateAccountResponse";
const BASE_URL = import.meta.env.VITE_BASE_URL;

const SignUpPage = () => {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const onSubmit = async () => {
    const request: CreateAccountRequest = {
      name,
      username,
      password,
    };

    const response = await axios.post<
      CreateAccountRequest,
      AxiosResponse<CreateAccountResponse>
    >(`${BASE_URL}/users/login`, request);

    if (response.status === 200) {
      navigate("/login");
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
          <SignUpPageContainer>
            <SignUpPageHeaderContainer className="sign-up-page__header-container">
              <SignUpPageHeader>
                <p>Already have an account?</p>
                <Button
                  variant="contained"
                  className="sign-up-page__login-btn"
                  href="/login"
                >
                  Login
                </Button>
              </SignUpPageHeader>
            </SignUpPageHeaderContainer>

            <div>
              <StyledLogoImg src={logo} />
              <h1>Bookworms</h1>
              <p>Sign up to access existing account</p>
              <form className="sign-up-page__form">
                <div className="sign-up-page__username-container">
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="username"
                    label="Username"
                    name="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    autoComplete="username"
                    autoFocus
                  />
                </div>
                <div>
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="name"
                    label="Name"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    autoComplete="name"
                    autoFocus
                  />
                </div>
                <div className="sign-up-page__password-container">
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    autoComplete="current-password"
                  />
                </div>
                <Button
                  variant="contained"
                  className="sign-up-page__sign-up-btn"
                  onClick={() => onSubmit()}
                >
                  Sign Up
                </Button>
              </form>
            </div>
          </SignUpPageContainer>
        </Box>
      </Grid>
    </Grid>
  );
};

export default SignUpPage;
