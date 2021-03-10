import React from "react";
import ReactDom from "react-dom";

import RandomNumber from "./components/RandomNumber";

import { NumberProvider } from "./contexts/NumberContext";


function App() {
    return (
        <NumberProvider>
            <div className="App">
               <RandomNumber></RandomNumber>
            </div>
        </NumberProvider>
    );
}

const rootElement = document.getElementById("root");
ReactDom.render(<App />, rootElement);

