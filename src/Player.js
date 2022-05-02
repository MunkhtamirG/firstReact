import Score from "./Score";
function Player() {
  return (
    <div className="box">
      <span>Name: </span>
      <Score />
      <span> Points</span>
    </div>
  );
}

export default Player;
