import React from "react";
import { createRoot } from "react-dom/client";
import App from "./components/App";
import '../public/styles.css'

const root = createRoot(document.getElementById('root'));
root.render(
  <>
    <div>
      <App />
    </div>
  </>
);


