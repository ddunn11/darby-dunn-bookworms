import { Box, Button, Grid, Paper, TextField } from "@mui/material";
import { useNavigate, useParams } from "react-router";
import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { DatePicker } from "@mui/x-date-pickers";
import ClubMeetingsResponse from "../../models/ClubMeetingsResponse";
import EditMeetingRequest from "../../models/EditMeetingRequest";
import EditMeetingResponse from "../../models/EditMeetingResponse";
import * as dayjs from "dayjs";

const EditMeetingPage = () => {
  const [date, setDate] = useState<dayjs.Dayjs>(dayjs());
  const [location, setLocation] = useState<string>("");
  const [book, setBook] = useState<string>("");

  const { clubID, meetingID } = useParams();
  const navigate = useNavigate();

  const getAllMeetingsForClub = async () => {
    const response = await axios.get<ClubMeetingsResponse[]>(
      `http://localhost:8080/clubs/${clubID}/meetings`
    );

    const meeting = response.data.find((m) => m.MeetingID === meetingID);

    if (meeting) {
      setBook(meeting.Book);
      setDate(dayjs(meeting.Date));
      setLocation(meeting.Location);
    }
  };

  const handleSubmit = async (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();

    const request: EditMeetingRequest = {
      date: date.toString(),
      location,
      book,
    };

    const response = await axios.put<
      EditMeetingRequest,
      AxiosResponse<EditMeetingResponse>
    >(`http://localhost:8080/meetings/${meetingID}`, request);

    if (response.status === 200) {
      navigate(`/clubs/${clubID}`);
    }
  };

  useEffect(() => {
    getAllMeetingsForClub();
  }, []);

  return (
    <Grid container component="main" sx={{ height: "100vh" }}>
      <Grid
        item
        xs={false}
        sm={4}
        md={7}
        sx={{
          backgroundImage: "url(https://source.unsplash.com/random?book)",
          backgroundRepeat: "no-repeat",
          backgroundColor: (t) =>
            t.palette.mode === "light"
              ? t.palette.grey[50]
              : t.palette.grey[900],
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <Box
          sx={{
            my: 8,
            mx: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div>
            <h2>Edit a meeting</h2>
            <form>
              <div>
                <DatePicker
                  label="Meeting Date"
                  value={date}
                  onChange={(newDate) => {
                    if (newDate !== null) setDate(newDate);
                  }}
                />
              </div>
              <TextField
                margin="normal"
                required
                fullWidth
                id="editMeetingLocation"
                label="Meeting Location"
                name="editMeetingLocation"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                autoComplete="MeetingLocation"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="editMeetingBook"
                label="Meeting Book"
                name="editMeetingBook"
                value={book}
                onChange={(e) => setBook(e.target.value)}
                autoComplete="editMeetingBook"
                autoFocus
              />
              <Button variant="contained" type="submit" onClick={handleSubmit}>
                Edit meeting
              </Button>
            </form>
          </div>
        </Box>
      </Grid>
    </Grid>
  );
};

export default EditMeetingPage;
