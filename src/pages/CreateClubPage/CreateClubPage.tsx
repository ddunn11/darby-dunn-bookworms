import { Button } from "@mui/material";

const CreateClubPage = () => {
  return (
    <div>
      <h2>Create a Book Club</h2>
      <form>
        <div>
          <label htmlFor="newBookClubName">Book Club Name:</label>
          <input id="newBookClubName" placeholder="Book Club Name" />
        </div>
        <div>
          <label htmlFor="newBookClubDescription">Book Club Description:</label>
          <input
            id="newBookClubDescription"
            placeholder="Book Club Description"
          />
        </div>
        <Button variant="contained">Create new book club</Button>
      </form>
    </div>
  );
};

export default CreateClubPage;
