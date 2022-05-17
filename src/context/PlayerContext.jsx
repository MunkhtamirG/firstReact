import { useContext, createContext, useState, useEffect } from "react";

const PlayersContext = createContext();

export function usePlayers() {
  return useContext(PlayersContext);
}

export default function PlayerProvider(props) {
  const [players, setPlayers] = useState();

  useEffect(() => {
    fetch("players.json")
      .then((e) => {
        return e.json();
      })
      .then((e) => {
        setPlayers(e.players);
      });
  }, []);
  console.log(players);
  return (
    <PlayersContext.Provider value={[players, setPlayers]}>
      {props.children}
    </PlayersContext.Provider>
  );
}
