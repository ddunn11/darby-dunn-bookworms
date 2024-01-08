import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import ClubPageMeetingListProps from "../../models/ClubPageMeetingListProps";

const ClubPageMeetings = ({
  meetingID,
  date,
  location,
  book,
}: ClubPageMeetingListProps) => {
  const onClick = () => {
    console.log("what do I do with this guy", meetingID);
  };
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
          {book}
        </Typography>
        <Typography gutterBottom variant="h5" component="h2">
          {location}
        </Typography>
        <Typography gutterBottom variant="h5" component="h2">
          {date}
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

export default ClubPageMeetings;
