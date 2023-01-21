import React from "react";
import { createRoot } from "react-dom";
import App from "./components/App";

const root = createRoot(document.getElementById("root"));
root.render(
  <>
    <h1>Coffe Time</h1>
    <div>
      <App />
    </div>
  </>
);
