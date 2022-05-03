import Score from "../src/Score.js";
function Player(prop) {
  return (
    <div className="box">
      <h3>{prop.playerData.name}</h3>
      <Score />
    </div>
  );
}

export default Player;
