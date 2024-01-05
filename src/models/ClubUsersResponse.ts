import ClubRoles from "./ClubRoles";

export default interface ClubUsersResponse {
  UserID: string;
  UserName: string;
  Name: string;
  Role: ClubRoles;
}
