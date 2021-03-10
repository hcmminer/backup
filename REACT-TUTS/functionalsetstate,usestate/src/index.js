import React from "react";
import ReactDOM from "react-dom";

import Counter from "./components/Counter";
import Counter2 from"./components/Counter2";

function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <Counter />
      <Counter2></Counter2>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
