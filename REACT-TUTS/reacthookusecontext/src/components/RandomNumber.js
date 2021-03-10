import React, { useContext } from "react";

import { NumberContext } from "../contexts/NumberContext";

export default function () {
    const {xxx,yyy} = useContext(NumberContext);

    return <div>
        <h2>{xxx}</h2>
        <button onClick={yyy}>Update Number</button>
    </div>

}

