import "./App.css";
import Player from "./Player";
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
  const [, changeScore] = useState(players.forEach((e) => e.score));
  function modifyScore(name, plusMinus) {
    if (plusMinus === "+") {
      players[findPlayerIndex(name)].score++;
      changeScore(players[findPlayerIndex(name)].score);
    } else {
      players[findPlayerIndex(name)].score--;
      changeScore(players[findPlayerIndex(name)].score);
    }
  }
  function findPlayerIndex(playerName) {
    let foundIndex = 0;
    players.map((player, index) => {
      if (player.name === playerName) {
        foundIndex = index;
      }
      return foundIndex;
    });
    return foundIndex;
  }

  return (
    <div className="App">
      <Header />
      {players.map((player, index) => {
        return (
          <Player key={index} playerData={player} modifyScore={modifyScore} />
        );
      })}
    </div>
  );
}

export default App;
