import { Card, CardContent, Typography } from "@mui/material";
import ClubPageMeetingListProps from "../../models/ClubPageMeetingListProps";
import * as dayjs from "dayjs";

const ClubPageMeetings = ({
  date,
  location,
  book,
}: ClubPageMeetingListProps) => {
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
      {/* Keeping this in for later when I add edit functionality on the front end
      <CardActions>
                <Button size="small">
                  View
                </Button>
                <Button size="small">Edit</Button>
              </CardActions> */}
    </Card>
  );
};

export default ClubPageMeetings;
