function Header(props) {
  return (
    <div className="header">
      <h1>Scoreboard</h1>
      <div className="rightSide">
        <h2>Players:</h2>
        <h2>{props.lengt}</h2>
      </div>
    </div>
  );
}

export default Header;
