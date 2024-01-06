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

  // hardcoded clubID for now (Gryffindor)
  const clubID = "75cc1be3-29ca-4317-9db0-bc2b5d2d31b5";

  // CLUB DETAILS
  const getClubDetails = async () => {
    const response = await axios.get<ClubDetailsResponse[]>(
      `http://localhost:8080/clubs/${clubID}`
    );

    console.log("get club details", response.data);
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
    console.log("Club Users", response.data);

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
    console.log("Meetings data", response.data);

    const meetingList = response.data;

    const meetingListProps = meetingList.map((m) => {
      const prop: ClubPageMeetingListProps = {
        meetingID: m.MeetingID,
        date: m.Date,
        location: m.Location,
        book: m.Book,
      };
      return prop;
    });
    setMeetingListProps(meetingListProps);
  };

  const createMeetingListFromProps = (): JSX.Element[] => {
    return meetingListProps.map((p) => {
      return (
        <ClubPageMeetings
          meetingID={p.meetingID}
          date={p.date}
          location={p.location}
          book={p.book}
          key={p.meetingID}
        />
      );
    });
  };

  useEffect(() => {
    getClubDetails();
    getAllUsersForClub();
    getAllMeetingsForClub();
  }, []);

  console.log("details", clubDetails);
  console.log("details name", clubDetails?.ClubName);

  return (
    <>
      {clubDetails !== undefined && (
        <ClubDetails
          ClubName={clubDetails.ClubName}
          Description={clubDetails.Description}
        />
      )}
      {createUserListFromProps()}

      {createMeetingListFromProps()}
    </>
  );
};

export default ClubPage;
