import React from "react";
import ReactDOM from "react-dom/client";
// import { App } from "./App";
import "./styles.css";
// import { CounterApp } from "./CounterApp";
import FirstComponent from "./FirstComponent";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <App title={"Hola pipin"}/> */}
    {/* <CounterApp value={3} /> */}

    <FirstComponent title="Hola, Soy tu padre" />
  </React.StrictMode>
);
