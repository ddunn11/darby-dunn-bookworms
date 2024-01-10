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
import { ThemeProvider } from "@emotion/react";
import getTheme from "./themes/Theme.ts";
import React, { useEffect } from "react";
import { PaletteMode } from "@mui/material";
import {
  getThemeFromLocalStorage,
  setThemeInLocalStorage,
} from "./helpers/localstorage.ts";

export const ColorModeContext = React.createContext({
  toggleColorMode: () => {},
});

function App() {
  const [mode, setMode] = React.useState<PaletteMode>(
    getThemeFromLocalStorage()
  );
  const colorMode = React.useMemo(
    () => ({
      // The dark mode switch would invoke this method
      toggleColorMode: () => {
        setMode((prevMode: PaletteMode) =>
          prevMode === "light" ? "dark" : "light"
        );
      },
    }),
    []
  );

  useEffect(() => {
    setThemeInLocalStorage(mode);
  }, [mode]);

  // Update the theme only if the mode changes
  const theme = React.useMemo(() => getTheme(mode), [mode]);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
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
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
