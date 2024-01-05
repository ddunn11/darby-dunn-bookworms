import ClubDetailsResponse from "../../models/ClubDetailsResponse";

const ClubDetails = ({ ClubName, Description }: ClubDetailsResponse) => {
  return (
    <div>
      <h1>{ClubName}</h1>
      <p>{Description}</p>
    </div>
  );
};

export default ClubDetails;
