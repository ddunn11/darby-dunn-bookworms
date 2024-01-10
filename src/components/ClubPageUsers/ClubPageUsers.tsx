import { Card, CardContent, Typography } from "@mui/material";
import ClubPageClubUserListProps from "../../models/ClubPageClubUserListProps";

//COMPONENT for club page (get all users from club)

const ClubPageUsers = ({ username, name, role }: ClubPageClubUserListProps) => {
  return (
    <Card
      sx={{
        // height: "100%",
        display: "flex",
        flexDirection: "column",
        margin: "1rem",
      }}
      elevation={2}
    >
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography gutterBottom variant="h5" component="h2">
          {name} ({username})
        </Typography>
        <Typography gutterBottom variant="h5" component="h2">
          {role}
        </Typography>
      </CardContent>
      {/* <CardActions>
                <Button size="small">
                  View
                </Button>
                <Button size="small">Edit</Button>
              </CardActions> */}
    </Card>
  );
};

export default ClubPageUsers;
