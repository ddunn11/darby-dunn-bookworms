import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router";

export interface HomePageClubItemProps {
  clubID: string;
  clubName: string;
}

const HomePageClubItem = ({ clubID, clubName }: HomePageClubItemProps) => {
  const navigate = useNavigate();
  const onClick = () => {
    navigate(`/clubs/${clubID}`);
  };

  return (
    <Grid item key={clubID} xs={12} sm={6} md={4}>
      <Card
        sx={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <CardMedia
          component="div"
          sx={{
            // 16:9
            pt: "56.25%",
          }}
          image="https://source.unsplash.com/random?book"
        />
        <CardContent sx={{ flexGrow: 1 }}>
          <Typography gutterBottom variant="h5" component="h2">
            {clubName}
          </Typography>
          <Typography>Club description will go here.</Typography>
        </CardContent>
        <CardActions>
          <Button size="small" onClick={() => onClick()}>
            View
          </Button>
          <Button size="small">Edit</Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default HomePageClubItem;
