import React from "react";
import { createRoot } from "react-dom/client";
import App from "./components/App";
import Login from "./components/Login"
import '../public/styles.css'

const root = createRoot(document.getElementById('root'));
root.render(
  <>
    <div>
      <App />
      <Login />
    </div>
  </>
);


