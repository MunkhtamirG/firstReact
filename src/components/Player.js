import { usePlayers } from "../context/PlayerContext";
function Player(prop) {
  const [players, setPlayers] = usePlayers();
  function removeHandler(playerName) {
    let newArr = [...players];

    let filtered = newArr.filter((n) => {
      return n.name !== playerName;
    });

    setPlayers(filtered);
    localStorage.setItem("players", JSON.stringify(filtered));
  }

  return (
    <div className="App">
      {players &&
        players.map((player, index) => {
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
