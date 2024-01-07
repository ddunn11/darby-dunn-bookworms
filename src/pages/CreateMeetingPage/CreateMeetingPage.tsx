import { Button } from "@mui/material";
import { useNavigate, useParams } from "react-router";
import axios, { AxiosResponse } from "axios";
import { useState } from "react";
import CreateMeetingResponse from "../../models/CreateMeetingResponse";
import CreateMeetingRequest from "../../models/CreateMeetingRequest";
import * as dayjs from "dayjs";
import {
  CreateMeetingPageContainer,
  StyledH2,
  StyledInput,
  StyledLabel,
} from "./StylesCreateMetings";
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
      <StyledH2>Create a Meeting</StyledH2>
      <form>
        <div>
          <StyledLabel htmlFor="newMeetingDate">Date:</StyledLabel>
          <DatePicker
            label="Meeting Date"
            value={date}
            onChange={(newDate) => {
              if (newDate !== null) setDate(newDate);
            }}
          />
        </div>
        <div>
          <StyledLabel htmlFor="newMeetingLocation">Location:</StyledLabel>
          <StyledInput
            id="newMeetingLocation"
            placeholder="Meeting Location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>
        <div>
          <StyledLabel htmlFor="newMeetingBook">Book:</StyledLabel>
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
