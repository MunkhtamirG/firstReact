import "./App.css";
import Player from "./Player";
import Header from "./Header";

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
  return (
    <div className="App">
      <Header />
      {players.map((player, index) => {
        return <Player key={index} playerData={player} />;
      })}
    </div>
  );
}

export default App;

fetch("../data/player.json")
  .then((res) => JSON.parse(res))
  .then((data) => console.log(data))
  .catch((err) => console.log(err));
