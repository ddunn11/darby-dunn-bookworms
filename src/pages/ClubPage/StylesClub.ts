import { styled } from "@mui/system";

export const ClubPageContainer = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  color: theme.palette.text.primary,
  // width: "100%",
}));

export const ClubDetailsContainer = styled("div")({
  width: "100%",
});

export const UserListContainer = styled("div")({
  width: "100%",
});

export const MeetingListContainer = styled("div")({
  width: "100%",
});
