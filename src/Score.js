function Score(prop) {
  function handler(e) {
    if (e.target.textContent === "+") {
      // prop.modifyScore(prop.playerData.name, "+");
      prop.changeScore(prop.score + 1);
    } else {
      // prop.modifyScore(prop.playerData.name, "-");
      prop.changeScore(prop.score - 1);
    }
  }
  return (
    <div className="data">
      <button onClick={handler}>-</button>
      {/* <p>{prop.playerData.score}</p> */}
      <p>{prop.score}</p>
      <button onClick={handler}>+</button>
    </div>
  );
}
export default Score;
