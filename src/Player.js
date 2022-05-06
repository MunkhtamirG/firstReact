import { useState } from "react";
import Score from "../src/Score";
function Player(prop) {
  const [score, changeScore] = useState(prop.playerData.score);
  let boxClass;
  if (prop.avarege > score) {
    boxClass = "box";
  } else {
    boxClass = "boxBG";
  }
  return (
    <div className={boxClass}>
      <h3>{prop.playerData.name}</h3>
      <Score score={score} changeScore={changeScore} />
    </div>
  );
}

export default Player;
