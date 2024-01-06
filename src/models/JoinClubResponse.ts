import ClubRoles from "./ClubRoles";

export default interface JoinClubResponse {
  userID: string;
  clubID: string;
  role: ClubRoles;
}
