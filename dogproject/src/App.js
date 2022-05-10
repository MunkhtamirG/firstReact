import "./App.css";
import React, { useState } from "react";
import { getAllDogs } from "./API/services";

function App() {
  const [dogs, setDogs] = useState();
  function handler() {
    getAllDogs()
      .then((res) => res.json())
      .then((res) => {
        setDogs(res.message);
      });
  }

  return (
    <div className="App">
      <button onClick={handler}>Fetch</button>
      {dogs ? (
        <div>
          <span>Select breed: </span>
          <select name="dogBreed" id="dogBreed">
            {dogs &&
              Object.keys(dogs).map((dogName, index) => {
                return (
                  <option value={dogName} key={index}>
                    {dogName}
                  </option>
                );
              })}
          </select>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}

export default App;
