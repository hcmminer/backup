import React from "react";
import ReactDOM  from 'react-dom';

import "./styles.css";
import AwesomeImage from "./components/AwesomeImage";
import withHoverOpacity from "./components/withHoverOpacity";

const HoverOpacityAwesomeImage = withHoverOpacity(AwesomeImage, 0);

function App(){
    return (
        <div classNames="App">
                <HoverOpacityAwesomeImage src="https://picsum.photos/200/300"/>  
        </div>
    )
}

const rootElelment = document.getElementById("root");
ReactDOM.render(<App />, rootElelment);