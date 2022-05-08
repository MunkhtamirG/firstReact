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
  const [name, getSort] = useState(players);

  function sortName() {
    players.sort((a, b) => {
      if (a.name.toLowerCase() > b.name.toLowerCase()) {
        return -1;
      }
    });
    getSort(name);
    console.log(name);
  }
  console.log(players);

  let total = 0;

  players.forEach((player) => {
    total += player.score;
  });
  let avarege = total / players.length;
  console.log(name);
  return (
    <div className="App">
      <Header lengt={players.length} />
      <div className="buttons">
        <button onClick={sortName}>Name</button>
        <button>Score</button>
      </div>
      {name.map((player, index) => {
        return <Player key={index} player={player} avarege={avarege} />;
      })}
    </div>
  );
}

export default App;

// const [score, changeScore] = useState(players.forEach((e) => e.score));
// function modifyScore(name, plusMinus) {
//   if (plusMinus === "+") {
//     players[findPlayerIndex(name)].score++;
//     changeScore(score + 1);
//   } else {
//     players[findPlayerIndex(name)].score--;
//     changeScore(score - 1);
//   }
// }
// function findPlayerIndex(playerName) {
//   let foundIndex = 0;
//   players.map((player, index) => {
//     if (player.name === playerName) {
//       foundIndex = index;
//     }
//     return foundIndex;
//   });
//   return foundIndex;
// }
