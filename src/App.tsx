import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import LoginPage from "./pages/LoginPage/LoginPage";
import SignUpPage from "./pages/SignUpPage/SignUpPage";
import HomePage from "./pages/HomePage/HomePage";
import ClubPage from "./pages/ClubPage/ClubPage";
import CreateClubPage from "./pages/CreateClubPage/CreateClubPage";
import CreateMeetingPage from "./pages/CreateMeetingPage/CreateMeetingPage";
import EditUserPage from "./pages/EditUserPage/EditUserPage";
import EditClubPage from "./pages/EditClubPage/EditClubPage";
import EditMeetingPage from "./pages/EditMeetingPage/EditMeetingPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/create-account" element={<SignUpPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/clubs/:clubID" element={<ClubPage />} />
        <Route path="clubs/create-club" element={<CreateClubPage />} />
        <Route
          path="clubs/:clubID/create-meeting"
          element={<CreateMeetingPage />}
        />
        <Route path="edit-user" element={<EditUserPage />} />
        <Route path="edit-club/:clubID" element={<EditClubPage />} />
        <Route
          path="edit-meeting/:clubID/:meetingID"
          element={<EditMeetingPage />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
