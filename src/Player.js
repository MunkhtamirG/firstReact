import Score from "../src/Score";
function Player(prop) {
  return (
    <div className="box">
      <h3>{prop.playerData.name}</h3>
      <Score playerData={prop.playerData} modifyScore={prop.modifyScore} />
    </div>
  );
}

export default Player;
