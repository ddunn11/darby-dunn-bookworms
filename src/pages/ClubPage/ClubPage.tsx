import axios from "axios";
import ClubDetailsResponse from "../../models/ClubDetailsResponse";
import ClubUsersResponse from "../../models/ClubUsersResponse";
import ClubMeetingsResponse from "../../models/ClubMeetingsResponse";
import { useEffect, useState } from "react";
import ClubDetails from "../../components/ClubDetails/ClubDetails";
import ClubPageClubUserListProps from "../../models/ClubPageClubUserListProps";
import ClubPageUsers from "../../components/ClubPageUsers/ClubPageUsers";
import ClubPageMeetingListProps from "../../models/ClubPageMeetingListProps";
import ClubPageMeetings from "../../components/ClubPageMeetings/ClubPageMeetings";
import { useNavigate, useParams } from "react-router";
import { Button, Container, Grid, Paper, Typography } from "@mui/material";
import { ClubDetailsContainer, ClubPageContainer } from "./StylesClub";
import * as dayjs from "dayjs";
import Navbar from "../../components/Navbar/Navbar";

// club page requires details for club, users, meetings --- 3 get requests
const ClubPage = () => {
  const [clubDetails, setClubDetails] = useState<ClubDetailsResponse>();
  //should userListProps be here or down closer to where it's used??
  const [userListProps, setUserListProps] = useState<
    ClubPageClubUserListProps[]
  >([]);
  const [meetingListProps, setMeetingListProps] = useState<
    ClubPageMeetingListProps[]
  >([]);

  const navigate = useNavigate();

  const { clubID } = useParams();

  // CLUB DETAILS
  const getClubDetails = async () => {
    const response = await axios.get<ClubDetailsResponse[]>(
      `http://localhost:8080/clubs/${clubID}`
    );

    //const club = response.data;
    const clubDetails = response.data[0];

    setClubDetails(clubDetails);
  };

  // USER DETAILS
  // use createProps function not the response model
  const getAllUsersForClub = async () => {
    const response = await axios.get<ClubUsersResponse[]>(
      `http://localhost:8080/clubs/${clubID}/users`
    );

    const userList = response.data;

    const userListProps = userList.map((u) => {
      const prop: ClubPageClubUserListProps = {
        userID: u.UserID,
        username: u.UserName,
        name: u.Name,
        role: u.Role,
      };

      return prop;
    });

    setUserListProps(userListProps);
  };

  const createUserListFromProps = (): JSX.Element[] => {
    return userListProps.map((p) => {
      return (
        <ClubPageUsers
          userID={p.userID}
          username={p.username}
          name={p.name}
          role={p.role}
          key={p.userID}
        />
      );
    });
  };

  // MEETINGS DETAILS
  const getAllMeetingsForClub = async () => {
    const response = await axios.get<ClubMeetingsResponse[]>(
      `http://localhost:8080/clubs/${clubID}/meetings`
    );

    const meetingList = response.data.sort((a, b) =>
      dayjs(a.Date).unix() > dayjs(b.Date).unix() ? 1 : -1
    );

    const meetingListProps = meetingList.map((m) => {
      const prop: ClubPageMeetingListProps = {
        meetingID: m.MeetingID,
        date: m.Date,
        location: m.Location,
        book: m.Book,
        clubID: clubID || "",
      };
      return prop;
    });
    setMeetingListProps(meetingListProps);
  };

  const createMeetingListFromProps = (): JSX.Element[] => {
    return meetingListProps.map((p) => {
      return (
        <ClubPageMeetings
          clubID={p.clubID}
          meetingID={p.meetingID}
          date={p.date}
          location={p.location}
          book={p.book}
          key={p.meetingID}
        />
      );
    });
  };

  const onCreateMeetingClick = () => {
    navigate(`/clubs/${clubID}/create-meeting`);
  };

  useEffect(() => {
    getClubDetails();
    getAllUsersForClub();
    getAllMeetingsForClub();
  }, []);

  return (
    <ClubPageContainer>
      <Navbar />
      <ClubDetailsContainer>
        {clubDetails !== undefined && (
          <ClubDetails
            ClubName={clubDetails.ClubName}
            Description={clubDetails.Description}
          />
        )}
      </ClubDetailsContainer>

      <Container sx={{ py: 8 }} maxWidth="lg">
        {/* End hero unit */}
        <Grid container spacing={4}>
          <Grid item key="club members" xs={12} sm={4}>
            <Paper
              elevation={4}
              sx={{
                paddingBottom: "1rem",
              }}
            >
              <Typography paddingTop="1rem" variant="h4" component="h2">
                Club Members
              </Typography>
              {createUserListFromProps()}
            </Paper>
          </Grid>

          <Grid item key="club meetings" xs={12} sm={8}>
            <Paper
              elevation={4}
              sx={{
                paddingBottom: "1rem",
              }}
            >
              <Typography paddingTop="1rem" variant="h3" component="h2">
                Meetings
              </Typography>
              <Button onClick={onCreateMeetingClick}>Create Meeting</Button>
              {createMeetingListFromProps()}
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </ClubPageContainer>
  );
};

export default ClubPage;
