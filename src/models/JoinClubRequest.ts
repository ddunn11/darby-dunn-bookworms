import ClubRoles from "./ClubRoles";

export default interface JoinClubRequest {
  userID: string;
  role: ClubRoles;
}
