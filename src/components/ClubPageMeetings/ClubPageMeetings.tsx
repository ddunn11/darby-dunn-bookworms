import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import ClubPageMeetingListProps from "../../models/ClubPageMeetingListProps";
import * as dayjs from "dayjs";
import { useNavigate } from "react-router";

const ClubPageMeetings = ({
  date,
  location,
  book,
  meetingID,
  clubID,
}: ClubPageMeetingListProps) => {
  const navigate = useNavigate();

  const editMeeting = () => {
    navigate(`/edit-meeting/${clubID}/${meetingID}`);
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
          {dayjs(date).format("dddd MMM D YYYY - h:mmA")}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={() => editMeeting()}>
          Edit
        </Button>
      </CardActions>
    </Card>
  );
};

export default ClubPageMeetings;
