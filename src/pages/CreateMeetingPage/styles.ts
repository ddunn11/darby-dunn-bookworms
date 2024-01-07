import { Input } from "@mui/material";
import { borderRadius, styled } from "@mui/system";

export const CreateMeetingPageContainer = styled("div")({
  backgroundColor: "#80A4ED",
  display: "flex",
  flexDirection: "column",
  borderRadius: "0.25rem",
  width: "30rem",
});
export const StyledInput = styled(Input)({
  marginTop: "1rem",
  marginBottom: "1rem",
  paddingLeft: "0.5rem",
  backgroundColor: "#F8F2DC",
  borderRadius: "0.25rem",
});

export const StyledLabel = styled("label")({
  color: "#395C6B",
  backgroundColor: "#BCD3F2",
  marginRight: "1rem",
  borderRadius: "0.25rem",
  fontWeight: "bold",
  padding: "0.25rem",
});

// export const StyledDatePicker = styled("DatePicker")({
//   backgroundColor: "white",
// });
