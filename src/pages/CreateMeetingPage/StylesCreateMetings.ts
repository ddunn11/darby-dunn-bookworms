import { Input } from "@mui/material";
import { styled } from "@mui/system";

export const CreateMeetingPageContainer = styled("div")({
  backgroundColor: "#80A4ED",
  display: "flex",
  flexDirection: "column",
  borderRadius: "0.25rem",
  width: "30rem",
});

export const StyledH2 = styled("h2")({
  color: "navy",
  backgroundColor: "#BCD3F2",
  width: "50%",
  borderRadius: "0.25rem",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

export const StyledInput = styled(Input)({
  marginTop: "1rem",
  marginBottom: "1rem",
  paddingLeft: "0.5rem",
  backgroundColor: "white",
  borderRadius: "0.25rem",
});

export const StyledLabel = styled("label")({
  color: "navy",
  backgroundColor: "#BCD3F2",
  marginRight: "1rem",
  borderRadius: "0.25rem",
  fontWeight: "bold",
  padding: "0.25rem",
});

// export const StyledDatePicker = styled("DatePicker")({
//   backgroundColor: "white",
// });
