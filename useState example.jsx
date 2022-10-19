import { useState } from "react";
import "./App.css";

function App() {
  const [myName, setName] = useState("Ali Hassan");
  const [myAge, setAge] = useState(28);
  const [startCounter, setCounter] = useState(0);

  return (
    <div className="App">
      <h2>My name is {myName}</h2>
      <button
        onClick={() => {
          setName("ELRAYEK ♣");
        }}
      >
        Change name
      </button>

      <h2 className="mt">My Age is {myAge}</h2>
      <button
        onClick={() => {
          setAge(33);
        }}
      >
        Change age
      </button>

      <br />
      <button
        className="mt"
        onClick={() => {
          setCounter(startCounter + 1);
        }}
      >
        COUNTER {startCounter}
      </button>
    </div>
  );
}

export default App;
