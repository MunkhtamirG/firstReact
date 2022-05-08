import { useEffect, useState } from "react";
import Score from "../src/Score";

function Player(prop) {
  const [sampleData, setSampleData] = useState([]);
  useEffect(() => {
    setSampleData(prop.players);
  }, []);

  function handleSort() {
    const sortedData = [...sampleData].sort((a, b) => {
      return a.name > b.name ? 1 : -1;
    });
    setSampleData(sortedData);
    console.log(sortedData);
  }

  function handleSort2() {
    const sortedData = [...sampleData].sort((a, b) => {
      return a.score > b.score ? -1 : 1;
    });

    setSampleData(sortedData);
    console.log(sortedData);
  }

  const names = sampleData.map((e) => {
    return <Score key={e.score} player={e} />;
  });

  return (
    <div>
      <div className="buttons">
        <button onClick={handleSort}>Name</button>
        <button onClick={handleSort2}>Score</button>
      </div>
      <div className="box">{names}</div>
    </div>
  );
}

export default Player;
