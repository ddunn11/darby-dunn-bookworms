import "./LandingPage.scss";
import Button from "@mui/material/Button";

const LandingPage = () => {
  return (
    <>
      <div>
        <h1>Bookworms</h1>
        <Button variant="contained" href="/login">
          Login
        </Button>
        <Button variant="contained" href="/create-account">
          Sign up
        </Button>
      </div>
    </>
  );
};

export default LandingPage;
