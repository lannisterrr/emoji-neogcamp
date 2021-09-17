import { useState } from "react";
import "./styles.css";

const emojiDictionary = {
  "🙈": "See no evil ",
  "🙉": "Hear no evil ",
  "🦄": "Unicorn",
  "🦗": "Cricket",
  "🦊": "Fox",
  "🐆": "Leapord",
  "🦙": "Lama"
};

export default function App() {
  const [input, setInput] = useState("");

  function inputHandler(event) {
    let userInput = event.target.value;
    let meaning = emojiDictionary[userInput];
    if (meaning === undefined) {
      meaning = "Not found";
    }

    setInput(meaning); // react call to set output
  }

  function listClickHandler(item) {
    let meaning = emojiDictionary[item];
    setInput(meaning); // react call to set output
  }

  return (
    <div className="App">
      <h1>inside out</h1>
      <input onChange={inputHandler} />
      <br />
      <h3>Meaning: {input} </h3>{" "}
      {/** Actual output set by react by using setState*/}
      <ul>
        {Object.keys(emojiDictionary).map((item) => {
          return (
            <li key={item} onClick={() => listClickHandler(item)}>
              {item}
            </li>
          );
        })}
      </ul>
      <br />
    </div>
  );
}
