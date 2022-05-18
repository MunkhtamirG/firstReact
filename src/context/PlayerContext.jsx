import { useContext, createContext, useState, useEffect } from "react";

const PlayersContext = createContext();

export function usePlayers() {
  return useContext(PlayersContext);
}

export default function PlayerProvider(props) {
  const [players, setPlayers] = useState();
  useEffect(() => {
    localStorage &&
      fetch("players.json")
        .then((e) => {
          return e.json();
        })
        .then((e) => {
          setPlayers(e.players);
          if (!localStorage.getItem("players")) {
            localStorage.setItem("players", JSON.stringify(players));
          } else {
            let data = JSON.parse(localStorage.getItem("players"));
            setPlayers(data);
          }
        });
  }, []);
  // useEffect(() => {
  //   if (!localStorage.getItem("players")) {
  //     localStorage.setItem("players", JSON.stringify(players));
  //   } else {
  //     let data = JSON.parse(localStorage.getItem("players"));
  //     setPlayers(data);
  //   }
  // }, []);

  return (
    <PlayersContext.Provider value={[players, setPlayers]}>
      {props.children}
    </PlayersContext.Provider>
  );
}
