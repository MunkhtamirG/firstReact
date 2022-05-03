import Score from "../src/Score";
function Player(prop) {
  return (
    <div className="box">
      <h3>{prop.playerData.name}</h3>
      <Score scoreData={prop.playerData.score} />
    </div>
  );
}

export default Player;