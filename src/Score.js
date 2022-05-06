function Score(prop) {
  function handler(e) {
    if (e.target.textContent === "+") {
      prop.modifyScore(prop.playerData.name, "+");
    } else {
      prop.modifyScore(prop.playerData.name, "-");
    }
  }
  return (
    <div className="data">
      <button onClick={handler}>-</button>
      <p>{prop.playerData.score}</p>
      <button onClick={handler}>+</button>
    </div>
  );
}
export default Score;
