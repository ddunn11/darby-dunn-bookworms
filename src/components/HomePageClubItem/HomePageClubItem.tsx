import "./HomePageClubItem.scss";

export interface HomePageClubItemProps {
  clubID: string;
  clubName: string;
}

const HomePageClubItem = ({ clubID, clubName }: HomePageClubItemProps) => {
  const onClick = () => {
    console.log(clubID);
  };

  return (
    <div className="club-item__container" onClick={() => onClick}>
      <div>{clubName}</div>
    </div>
  );
};

export default HomePageClubItem;
