import "./SignUpPage.scss";
import { Button } from "@mui/material";

const SignUpPage = () => {
  return (
    <div className="sign-up-page__container">
      <div className="sign-up-page__header-container">
        <p>Already have an account?</p>
        <Button
          variant="contained"
          className="sign-up-page__login-btn"
          href="/login"
        >
          Login
        </Button>
      </div>
      <div className="sign-up-page__content">
        <h1>Bookworms</h1>
        <p>Sign up to access existing account</p>
        <form className="sign-up-page__form">
          <div className="sign-up-page__username-container">
            <label htmlFor="username" className="sign-up-page__input-label">
              Username:
            </label>
            <input id="username" type="text" className="sign-up-page__input" />
          </div>
          <div className="sign-up-page__password-container">
            <label htmlFor="password" className="sign-up-page__input-label">
              Password:
            </label>
            <input id="password" type="text" className="sign-up-page__input" />
          </div>
          <div className="sign-up-page__name-container">
            <label htmlFor="name" className="sign-up-page__input-label">
              Name:
            </label>
            <input id="name" type="text" className="sign-up-page__input" />
          </div>
          <Button variant="contained" className="sign-up-page__sign-up-btn">
            Sign Up
          </Button>
        </form>
      </div>
    </div>
  );
};

export default SignUpPage;
