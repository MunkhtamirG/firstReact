function Score(prop) {
  return (
    <div className="data">
      <button>-</button>
      <h3>{prop.scoreData}</h3>
      <button>+</button>
    </div>
  );
}
export default Score;
