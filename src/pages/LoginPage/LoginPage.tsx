import { Box, Button, Grid, Paper, TextField } from "@mui/material";
import React, { useState } from "react";
import axios, { AxiosResponse } from "axios";
import LogInResponse from "../../models/LogInResponse";
import LogInRequest from "../../models/LogInRequest";
import {
  setTokenInLocalStorage,
  setUserIDInLocalStorage,
} from "../../helpers/localstorage";
import { useNavigate } from "react-router";
import {
  LoginPageContainer,
  LoginPageHeader,
  LoginPageHeaderContainer,
  StyledLogo,
} from "./StylesLogin";
import logo from "../../assets/images/bookworm-logo.png";
const BASE_URL = import.meta.env.VITE_BASE_URL;

const LoginPage = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const navigate = useNavigate();

  const handleSubmit = async (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();

    const request: LogInRequest = {
      username,
      password,
    };

    const response = await axios.post<
      LogInRequest,
      AxiosResponse<LogInResponse>
    >(`${BASE_URL}/users/login`, request);

    if (response.status === 200) {
      const logInResponse = response.data;

      setTokenInLocalStorage(logInResponse.token);
      setUserIDInLocalStorage(logInResponse.userID);
      navigate("/home");
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
          <LoginPageContainer className="login-page__container">
            <LoginPageHeaderContainer className="login-page__header-container">
              <LoginPageHeader>
                <p>Don't have an account?</p>
                <Button
                  variant="contained"
                  className="login-page__register-btn"
                  href="/create-account"
                  // onSubmit={() => LoginValidation}
                >
                  Register
                </Button>
              </LoginPageHeader>
            </LoginPageHeaderContainer>
            <div className="login-page__content">
              <StyledLogo src={logo} />
              <h1>Bookworms</h1>
              <p>Login to access existing account</p>
              <form className="login-page__form">
                <div className="login-page__username-container">
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
                  className="login-page__login-btn"
                  type="submit"
                  onClick={handleSubmit}
                >
                  Login
                </Button>
              </form>
            </div>
          </LoginPageContainer>
        </Box>
      </Grid>
    </Grid>
  );
};

export default LoginPage;
