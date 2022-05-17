import { useContext, createContext, useState, useEffect } from "react";

const PlayersContext = createContext();

export function usePlayers() {
  return useContext(PlayersContext);
}

export default function PlayerProvider(props) {
  const [players, setPlayers] = useState();

  useEffect(() => {
    fetch("data/players.json")
      .then((e) => e.json())
      .then((e) => {
        if (!localStorage.getItem(players)) {
          localStorage.setItem(players);
        } else {
          setPlayers(localStorage.setItem(e));
        }
      });
  }, [players]);

  return (
    <PlayersContext.Provider value={[players, setPlayers]}>
      {props.children}
    </PlayersContext.Provider>
  );
}
