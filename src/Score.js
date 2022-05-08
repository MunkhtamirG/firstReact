import { useState } from "react";
function Score(prop) {
  const [score, changeScore] = useState(prop.player.score);
  let boxClass;

  if (prop.avarege > score) {
    boxClass = "box";
  } else {
    boxClass = "boxBG";
  }
  function handler(e) {
    if (e.target.textContent === "+") {
      // prop.modifyScore(prop.playerData.name, "+");
      changeScore(score + 1);
    } else {
      // prop.modifyScore(prop.playerData.name, "-");
      changeScore(score - 1);
    }
  }
  return (
    <div className="data">
      {prop.player.name}
      <div className="inner">
        <button onClick={handler}>-</button>
        {/* <p>{prop.playerData.score}</p> */}
        <p>{score}</p>
        <button onClick={handler}>+</button>
      </div>
    </div>
  );
}
export default Score;
