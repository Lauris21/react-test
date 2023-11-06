import React from "react";
import  ReactDOM  from "react-dom/client";
// import { App } from "./App";
import "./styles.css"
import { CounterApp } from "./CounterApp";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        {/* <App title={"Hola pipin"}/> */}
        <CounterApp value={3} />
    </React.StrictMode>
)