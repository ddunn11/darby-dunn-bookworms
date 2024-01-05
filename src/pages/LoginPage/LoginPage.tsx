import { Button } from "@mui/material";
import "./LoginPage.scss";
import React, { useState } from "react";
import axios, { AxiosResponse } from "axios";
import LogInResponse from "../../models/LogInResponse";
import LogInRequest from "../../models/LogInRequest";
import {
  setTokenInLocalStorage,
  setUserIDInLocalStorage,
} from "../../helpers/localstorage";
import { useNavigate } from "react-router";

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
    >("http://localhost:8080/users/login", request);

    const logInResponse = response.data;

    setTokenInLocalStorage(logInResponse.token);
    setUserIDInLocalStorage(logInResponse.userID);
    navigate("/home");
  };

  return (
    <div className="login-page__container">
      <div className="login-page__header-container">
        <p>Don't have an account?</p>
        <Button
          variant="contained"
          className="login-page__register-btn"
          href="/create-account"
          // onSubmit={() => LoginValidation}
        >
          Register
        </Button>
      </div>
      <div className="login-page__content">
        <h1>Bookworms</h1>
        <p>Login to access existing account</p>
        <form className="login-page__form">
          <div className="login-page__username-container">
            <label htmlFor="username" className="login-page__input-label">
              Username:
            </label>
            <input
              id="username"
              type="text"
              className="login-page__input"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="login-page__password-container">
            <label htmlFor="password" className="login-page__input-label">
              Password:
            </label>
            <input
              id="password"
              type="password"
              className="login-page__input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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
    </div>
  );
};

export default LoginPage;
