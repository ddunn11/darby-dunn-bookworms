import { Box, Button, Grid, Paper, TextField, Typography } from "@mui/material";
import { useNavigate, useParams } from "react-router";
import axios, { AxiosResponse } from "axios";
import { useState } from "react";
import CreateMeetingResponse from "../../models/CreateMeetingResponse";
import CreateMeetingRequest from "../../models/CreateMeetingRequest";
import * as dayjs from "dayjs";
import { CreateMeetingPageContainer } from "./StylesCreateMetings";
import { DatePicker } from "@mui/x-date-pickers";
import Navbar from "../../components/Navbar/Navbar";
const BASE_URL = import.meta.env.VITE_BASE_URL;

const CreateMeetingPage = () => {
  const [date, setDate] = useState<dayjs.Dayjs>(dayjs());
  const [location, setLocation] = useState<string>("");
  const [book, setBook] = useState<string>("");

  const navigate = useNavigate();
  const { clubID } = useParams();

  const handleSubmit = async (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();

    if (clubID === undefined) {
      navigate("/clubs");
    }

    const request: CreateMeetingRequest = {
      clubID: clubID || "",
      date: date.toDate(),
      book: book,
      location: location,
    };

    const response = await axios.post<
      CreateMeetingRequest,
      AxiosResponse<CreateMeetingResponse>
    >(`${BASE_URL}/meetings`, request);

    if (response.status === 200) {
      navigate(`/clubs/${clubID}`);
    }
  };

  return (
    <div>
      <Navbar />
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
            {" "}
            <CreateMeetingPageContainer>
              <Typography
                variant="h5"
                sx={{
                  marginBottom: "1.5rem",
                }}
              >
                Create a Meeting
              </Typography>
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
                  id="newMeetingLocation"
                  label="Meeting Location"
                  name="newMeetingLocation"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  autoComplete="newMeetingLocation"
                  autoFocus
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="newMeetingBook"
                  label="Meeting Book"
                  name="newMeetingBook"
                  value={book}
                  onChange={(e) => setBook(e.target.value)}
                  autoComplete="newMeetingBook"
                  autoFocus
                />
                {/* <div>
                  <StyledLabel htmlFor="newMeetingBook">Book:</StyledLabel>
                  <StyledInput
                    id="newMeetingBook"
                    placeholder="Meeting Book"
                    value={book}
                    onChange={(e) => setBook(e.target.value)}
                  />
                </div> */}
                <Button
                  variant="contained"
                  type="submit"
                  onClick={handleSubmit}
                >
                  Create new meeting
                </Button>
              </form>
            </CreateMeetingPageContainer>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default CreateMeetingPage;
