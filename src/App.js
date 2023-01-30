import './App.css';
import React, { useState } from "react";
export default function App() {
  const [output, setOutput] = useState("");

  const handleClick = (e) => {
    setOutput(output.concat(e.target.name));
  };
  const clear = () => {
    setOutput("");
  };
  const backSpace = () => {
    setOutput(output.slice(0, -1));
  };
  const calculate = () => {
    try {
      setOutput(eval(output).toString());
    } catch (err) {
      setOutput("ERROR");
    }
  };

  return (
    <div className="App">
      <h1 style={{ color: "red" }}>CALCULATOR</h1>
      <h2>REACT</h2>
      <div className="container">
        <form>
          <input type="text" value={output} placeholder="0" />
        </form>
        <div className="keypad">
          <div>
            <button onClick={clear}>Clear All</button>
            <button onClick={backSpace}>C</button>
            <button name="/" onClick={handleClick}>
              &divide;
            </button>
          </div>
          <div>
            <button name="7" onClick={handleClick}>
              7
            </button>
            <button name="8" onClick={handleClick}>
              8
            </button>
            <button name="9" onClick={handleClick}>
              9
            </button>
            <button name="*" onClick={handleClick}>
              &times;
            </button>
          </div>
          <div>
            <button name="4" onClick={handleClick}>
              4
            </button>
            <button name="5" onClick={handleClick}>
              5
            </button>
            <button name="6" onClick={handleClick}>
              6
            </button>
            <button name="-" onClick={handleClick}>
              &ndash;
            </button>
          </div>
          <div>
            <button name="1" onClick={handleClick}>
              1
            </button>
            <button name="2" onClick={handleClick}>
              2
            </button>
            <button name="3" onClick={handleClick}>
              3
            </button>
            <button name="+" onClick={handleClick}>
              +
            </button>
          </div>
          <div>
            <button name="0" onClick={handleClick}>
              0
            </button>
            <button name="." onClick={handleClick}>
              .
            </button>
            <button onClick={calculate}>Answer</button>
          </div>
        </div>
      </div>
    </div>
  );
}
