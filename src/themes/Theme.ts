import { PaletteMode } from "@mui/material";
import { createTheme } from "@mui/material/styles";

const lightTheme = createTheme({
  palette: {
    primary: {
      main: "#284b63",
    },
    secondary: {
      main: "#64597b",
    },
    background: {
      default: "#fcfcff",
      paper: "#c9e6ff",
    },
    text: {
      primary: "#1a1c1e",
    },
    // Add more colors as needed
  },
});

const darkTheme = createTheme({
  palette: {
    primary: {
      main: "#352b4b",
    },
    secondary: {
      main: "#8bceff",
    },
    background: {
      default: "#1a1c1e",
      paper: "#22323f",
    },
    text: {
      primary: "#e2e2e5",
    },
    // Add more colors as needed
  },
});

const getTheme = (mode: PaletteMode) => {
  return mode === "light" ? lightTheme : darkTheme;
};

export default getTheme;
