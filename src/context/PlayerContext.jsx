import { useContext, createContext, useState, useEffect } from "react";

const PlayersContext = createContext();

export function usePlayers() {
  return useContext(PlayersContext);
}

export default function PlayerProvider(props) {
  const [players, setPlayers] = useState();
  console.log(players);
  useEffect(() => {
    fetch("players.json")
      .then((e) => {
        return e.json();
      })
      .then((e) => {
        setPlayers(e.players);
      });
  }, []);
  useEffect(() => {
    if (!localStorage.getItem("players")) {
      window.localStorage.setItem("players", JSON.stringify(players));
    } else {
      let data = JSON.parse(window.localStorage.getItem("players"));
      setPlayers(data);
    }
  }, []);

  return (
    <PlayersContext.Provider value={[players, setPlayers]}>
      {props.children}
    </PlayersContext.Provider>
  );
}
