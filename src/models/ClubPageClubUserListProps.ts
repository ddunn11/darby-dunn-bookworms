import ClubRoles from "./ClubRoles";

// MODEL

export default interface ClubPageClubUserListProps {
  userID: string;
  username: string;
  name: string;
  role: ClubRoles;
}
