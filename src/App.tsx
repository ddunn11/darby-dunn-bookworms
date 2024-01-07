import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import LandingPage from "./pages/LandingPage/LandingPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import SignUpPage from "./pages/SignUpPage/SignUpPage";
import HomePage from "./pages/HomePage/HomePage";
import ClubPage from "./pages/ClubPage/ClubPage";
import CreateClubPage from "./pages/CreateClubPage/CreateClubPage";
import CreateMeetingPage from "./pages/CreateMeetingPage/CreateMeetingPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/create-account" element={<SignUpPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/clubs/:clubID" element={<ClubPage />} />
        <Route path="clubs/create-club" element={<CreateClubPage />} />
        <Route
          path="clubs/:clubID/create-meeting"
          element={<CreateMeetingPage />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
