import "./App.css";
import Player from "./Player";
import Header from "./Header";

let players = [
  {
    name: "Erkhes",
    age: "15",
  },
  {
    name: "Miigaa",
    age: "15",
  },
  {
    name: "Odko",
    age: "15",
  },
  {
    name: "Burmaa",
    age: "15",
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
