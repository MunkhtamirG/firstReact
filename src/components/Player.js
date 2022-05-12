function Player(prop) {
  function removeHandler(playerName) {
    let newArr = [...prop.playersArr];

    let filtered = newArr.filter((n) => {
      return n.name != playerName;
    });

    prop.setPlayers(filtered);
  }

  return (
    <div className="App">
      {prop.playersArr.map((player, index) => {
        return (
          <div className="player" key={index}>
            <span>{player.image}</span>
            <p className="col-8">{player.name}</p>
            <div className="data">
              <div className="inner">
                <button
                  onClick={() => {
                    prop.incrementFunc(-1, player.name);
                  }}
                >
                  -
                </button>
                <p>{player.score}</p>
                <button
                  onClick={() => {
                    prop.incrementFunc(1, player.name);
                  }}
                >
                  +
                </button>
              </div>
            </div>
            <button
              className="btn btn-danger"
              onClick={() => {
                removeHandler(player.name);
              }}
            >
              x
            </button>
          </div>
        );
      })}
    </div>
  );
}
export default Player;
