import React from 'react';
import ReactDOM from 'react-dom';

import './styles.css';

import Counter from "./components/Counter";
import NumberProvider from "./components/NumberProvider";

import NumberContext from './contexts/NumberContext';


function App() {
    return (
        <NumberProvider>
            <div className="App">
                <NumberContext.Consumer>
                    {({ number, updateNumber }) => (
                        <div>
                            <h4>{number}</h4>
                            <button onClick={updateNumber}>Update Number</button>
                        </div>
                    )}
                </NumberContext.Consumer>
                <Counter>
                    {({ count }) =>
                        <h1>{count}</h1>}
                </Counter>
            </div>
        </NumberProvider>
    );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
