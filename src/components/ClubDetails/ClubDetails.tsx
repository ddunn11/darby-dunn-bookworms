import { Typography } from "@mui/material";
import ClubDetailsResponse from "../../models/ClubDetailsResponse";

const ClubDetails = ({ ClubName, Description }: ClubDetailsResponse) => {
  return (
    <div>
      <Typography variant="h2" sx={{ paddingTop: "4rem" }}>
        {ClubName}
      </Typography>
      <Typography variant="h5">{Description}</Typography>
    </div>
  );
};

export default ClubDetails;
