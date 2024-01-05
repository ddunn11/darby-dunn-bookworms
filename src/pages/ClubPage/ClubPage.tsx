import axios from "axios";
import ClubDetailsResponse from "../../models/ClubDetailsResponse";
import ClubUsersResponse from "../../models/ClubUsersResponse";
import ClubMeetingsResponse from "../../models/ClubMeetingsResponse";
import { useEffect, useState } from "react";
import ClubDetails from "../../components/ClubDetails/ClubDetails";

const ClubPage = () => {
  const [clubDetails, setClubDetails] = useState<ClubDetailsResponse>();
  const clubID = "75cc1be3-29ca-4317-9db0-bc2b5d2d31b5";
  const getClubDetails = async () => {
    const response = await axios.get<ClubDetailsResponse[]>(
      `http://localhost:8080/clubs/${clubID}`
    );

    console.log("get club details", response.data);
    //const club = response.data;
    const clubDetails = response.data[0];

    setClubDetails(clubDetails);
  };
  const getAllUsersForClub = async () => {
    const response = await axios.get<ClubUsersResponse[]>(
      `http://localhost:8080/clubs/${clubID}/users`
    );
    console.log("Club Users", response.data);
  };

  const getAllMeetingsForClub = async () => {
    const response = await axios.get<ClubMeetingsResponse[]>(
      `http://localhost:8080/clubs/${clubID}/meetings`
    );
    console.log("Meetings data", response.data);
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
      <div>Gryffindor</div>
      {clubDetails !== undefined && (
        <ClubDetails
          ClubName={clubDetails.ClubName}
          Description={clubDetails.Description}
        />
      )}
    </>
  );
};

export default ClubPage;
