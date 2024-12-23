import React from "react";
import ReactDOM from "react-dom/client"; // Use createRoot from ReactDOM
import "./index.css"; // Optional, for styling
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);