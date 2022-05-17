import { AddPlayer } from "./AddPlayer";
import Header from "./Header";
import { useEffect, useState } from "react";
import Player from "./Player";
import { usePlayers } from "../context/PlayerContext";

function MainForContext() {
  const [players, setPlayers] = usePlayers();
  const [changed, setChanged] = useState(true);
  // console.log(players);

  function incrementFunc(increment, playerName) {
    let tempMemos = [...players];
    let tempMemo = tempMemos.map((e) => {
      if (e.name === playerName) {
        e.score += increment;
      }
      return e;
    });

    setPlayers(tempMemo);
    localStorage.setItem("players", JSON.stringify(tempMemos));
  }

  function addsPlayer(obj) {
    let newData = [...players];
    newData.push(obj);
    setPlayers(newData);
    localStorage.setItem("players", JSON.stringify(newData));
  }

  function sortFuncByName() {
    let tempMemos = [...players];
    tempMemos.sort((a, b) => {
      return a.name > b.name ? 1 : -1;
    });
    setPlayers(tempMemos);
    setChanged(!changed);
    localStorage.setItem("players", JSON.stringify(tempMemos));
  }

  function sortFuncByScore() {
    let tempMemos = [...players];
    tempMemos.sort((a, b) => {
      return a.score > b.score ? -1 : 1;
    });
    setPlayers(tempMemos);
    setChanged(!changed);
    localStorage.setItem("players", JSON.stringify(tempMemos));
  }
  useEffect(() => {
    if (players) {
      let max = players[0];
      players.forEach((e) => {
        if (e.score > max.score) {
          max = e;
        }
        e.image = "";
      });
      max.image = "👑";
      setChanged(!changed);
    }
  }, [players]);

  return (
    <div className="App">
      <Header players={players} />
      <div className="buttons">
        <button onClick={sortFuncByName} className="btn btn-primary">
          Name
        </button>
        <button onClick={sortFuncByScore} className="btn btn-primary">
          Score
        </button>
      </div>
      <Player incrementFunc={incrementFunc} setPlayers={setPlayers} />

      <AddPlayer addsPlayer={addsPlayer} />
    </div>
  );
}

export default MainForContext;
