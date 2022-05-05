function Score(prop) {
  console.log(prop.scoreData);

  return (
    <div className="data">
      <button>-</button>
      <p> {prop.scoreData}</p>
      <button>+</button>
    </div>
  );
}
export default Score;
