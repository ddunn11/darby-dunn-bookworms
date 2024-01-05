import ClubPageClubUserListProps from "../../models/ClubPageClubUserListProps";

//COMPONENT for club page (get all users from club)

const ClubPageUsers = ({
  userID,
  username,
  name,
  role,
}: ClubPageClubUserListProps) => {
  const onClick = () => {
    console.log(userID, username, name, role);
  };

  return (
    <div>
      <p onClick={() => onClick}>{username}:</p>
      <p>{role}</p>
    </div>
  );
};

export default ClubPageUsers;
