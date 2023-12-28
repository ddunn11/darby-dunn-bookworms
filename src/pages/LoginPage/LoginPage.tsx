import { Button } from "@mui/material";
import "./LoginPage.scss";

const LoginPage = () => {
  return (
    <div className="login-page__container">
      <div className="login-page__header-container">
        <p>Don't have an account?</p>
        <Button
          variant="contained"
          className="login-page__register-btn"
          href="/create-account"
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
            <input id="username" type="text" className="login-page__input" />
          </div>
          <div className="login-page__password-container">
            <label htmlFor="password" className="login-page__input-label">
              Password:
            </label>
            <input id="password" type="text" className="login-page__input" />
          </div>
          <Button variant="contained" className="login-page__login-btn">
            Login
          </Button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
