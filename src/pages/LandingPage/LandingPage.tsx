import Button from "@mui/material/Button";
import logo from "../../assets/images/bookworm-logo.png";
import { StyledImg } from "./StylesLandingPage";

const LandingPage = () => {
  return (
    <>
      <div>
        <StyledImg src={logo} />
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
