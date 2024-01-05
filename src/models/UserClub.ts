import ClubRoles from "./ClubRoles";

export default interface UserClub {
  ClubID: string;
  ClubName: string;
  Description: string;
  Role: ClubRoles;
}
