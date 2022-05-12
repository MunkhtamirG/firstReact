import "./App.css";
import { AddPlayer } from "./components/AddPlayer";
import Header from "./components/Header";
import { useEffect, useState } from "react";
import Player from "./components/Player";

let players = [
  {
    name: "Erkhes",
    age: "15",
    score: 25,
  },
  {
    name: "Miigaa",
    age: "15",
    score: 15,
  },
  {
    name: "Odko",
    age: "15",
    score: 44,
  },
  {
    name: "Burmaa",
    age: "15",
    score: 45,
  },
];

function App() {
  const [playersArr, setPlayers] = useState(players);
  const [changed, setChanged] = useState(true);

  function incrementFunc(increment, playerName) {
    let tempMemos = [...playersArr];
    let tempMemo = tempMemos.map((e) => {
      if (e.name === playerName) {
        e.score += increment;
      }
      return e;
    });

    setPlayers(tempMemo);
  }

  function addsPlayer(obj) {
    let newData = [...playersArr];
    newData.push(obj);
    setPlayers(newData);
  }

  function sortFuncByName() {
    let tempMemos = [...playersArr];
    tempMemos.sort((a, b) => {
      return a.name > b.name ? 1 : -1;
    });
    setPlayers(tempMemos);
    setChanged(!changed);
  }

  function sortFuncByScore() {
    let tempMemos = [...playersArr];
    tempMemos.sort((a, b) => {
      return a.score > b.score ? -1 : 1;
    });
    setPlayers(tempMemos);
    setChanged(!changed);
  }
  useEffect(() => {
    let max = playersArr[0];
    playersArr.forEach((e) => {
      if (e.score > max.score) {
        max = e;
      }
      e.image = "";
    });
    max.image = "👑";
    setChanged(!changed);
  }, [playersArr]);

  return (
    <div className="App">
      <Header players={playersArr.length} />
      <div className="buttons">
        <button onClick={sortFuncByName} className="btn btn-primary">
          Name
        </button>
        <button onClick={sortFuncByScore} className="btn btn-primary">
          Score
        </button>
      </div>
      <Player
        playersArr={playersArr}
        incrementFunc={incrementFunc}
        setPlayers={setPlayers}
      />

      <AddPlayer addsPlayer={addsPlayer} />
    </div>
  );
}

export default App;
