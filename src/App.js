import "./App.css";
import { AddPlayer } from "./AddPlayer";
import Header from "./Header";
import { useState } from "react";

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
    score: 35,
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
    console.log(newData);
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
      return a.score > b.score ? 1 : -1;
    });
    setPlayers(tempMemos);
    setChanged(!changed);
  }
  return (
    <div className="App">
      <Header players={playersArr.length} />
      <div className="buttons">
        <button onClick={sortFuncByName}>Name</button>
        <button onClick={sortFuncByScore}>Score</button>
      </div>
      <div className="App">
        {playersArr.map((player, index) => {
          return (
            <div className="player" key={index}>
              <p>{player.name}</p>
              <div className="data">
                <div className="inner">
                  <button
                    onClick={() => {
                      incrementFunc(-1, player.name);
                    }}
                  >
                    -
                  </button>
                  <p>{player.score}</p>
                  <button
                    onClick={() => {
                      incrementFunc(1, player.name);
                    }}
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <AddPlayer addsPlayer={addsPlayer} />
    </div>
  );
}

export default App;
