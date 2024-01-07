import { Button } from "@mui/material";
import { useNavigate, useParams } from "react-router";
import axios, { AxiosResponse } from "axios";
import { useState } from "react";
import CreateMeetingResponse from "../../models/CreateMeetingResponse";
import CreateMeetingRequest from "../../models/CreateMeetingRequest";
import * as dayjs from "dayjs";
import { CreateMeetingPageContainer, StyledInput } from "./styles";
import { DatePicker } from "@mui/x-date-pickers";

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

    await axios.post<
      CreateMeetingRequest,
      AxiosResponse<CreateMeetingResponse>
    >("http://localhost:8080/meetings", request);

    navigate(`/clubs/${clubID}`);
  };

  return (
    <CreateMeetingPageContainer>
      <h2>Create a Meeting</h2>
      <form>
        <div>
          <label htmlFor="newMeetingDate">Date:</label>
          <DatePicker
            label="Meeting Date"
            value={date}
            onChange={(newDate) => {
              if (newDate !== null) setDate(newDate);
            }}
          />
        </div>
        <div>
          <label htmlFor="newMeetingLocation">Meeting Location:</label>
          <StyledInput
            id="newMeetingLocation"
            placeholder="Meeting Location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="newMeetingBook">Meeting Book:</label>
          <StyledInput
            id="newMeetingBook"
            placeholder="Meeting Book"
            value={book}
            onChange={(e) => setBook(e.target.value)}
          />
        </div>
        <Button variant="contained" type="submit" onClick={handleSubmit}>
          Create new meeting
        </Button>
      </form>
    </CreateMeetingPageContainer>
  );
};

export default CreateMeetingPage;
