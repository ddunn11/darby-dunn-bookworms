import { Button } from "@mui/material";
import { useNavigate } from "react-router";
import CreateClubRequest from "../../models/CreateClubRequest";
import axios, { AxiosResponse } from "axios";
import CreateClubResponse from "../../models/CreateClubResponse";
import JoinClubRequest from "../../models/JoinClubRequest";
import JoinClubResponse from "../../models/JoinClubResponse";
import ClubRoles from "../../models/ClubRoles";
import { getUserIDFromLocalStorage } from "../../helpers/localstorage";
import { useState } from "react";

const CreateClubPage = () => {
  const [clubName, setClubName] = useState<string>("");
  const [description, setDescription] = useState<string>("");

  const navigate = useNavigate();

  const handleSubmit = async (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();

    const request: CreateClubRequest = {
      clubName,
      description,
    };

    const response = await axios.post<
      CreateClubRequest,
      AxiosResponse<CreateClubResponse>
    >("http://localhost:8080/clubs", request);

    const clubData = response.data;
    const userID = getUserIDFromLocalStorage();
    joinClub(userID, clubData.clubID);
  };

  //user that creates the club should also join as admin
  const joinClub = async (userID: string, clubID: string) => {
    const request: JoinClubRequest = {
      userID,
      role: ClubRoles.Admin,
    };

    await axios.post<JoinClubRequest, AxiosResponse<JoinClubResponse>>(
      `http://localhost:8080/clubs/join/${clubID}`,
      request
    );

    // navigate to new club
    navigate(`/clubs/${clubID}`);
  };

  return (
    <div>
      <h2>Create a Book Club</h2>
      <form>
        <div>
          <label htmlFor="newBookClubName">Book Club Name:</label>
          <input
            id="newBookClubName"
            placeholder="Book Club Name"
            value={clubName}
            onChange={(e) => setClubName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="newBookClubDescription">Book Club Description:</label>
          <input
            id="newBookClubDescription"
            placeholder="Book Club Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <Button variant="contained" type="submit" onClick={handleSubmit}>
          Create new book club
        </Button>
      </form>
    </div>
  );
};

export default CreateClubPage;
