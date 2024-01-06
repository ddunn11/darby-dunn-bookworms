import ClubPageMeetingListProps from "../../models/ClubPageMeetingListProps";

const ClubPageMeetings = ({
  meetingID,
  date,
  location,
  book,
}: ClubPageMeetingListProps) => {
  const onClick = () => {
    console.log("what do I do with this guy", meetingID);
  };
  return (
    <div>
      <p onClick={() => onClick}>{date}</p>
      <p>{location}</p>
      <p>{book}</p>
    </div>
  );
};

export default ClubPageMeetings;
