import React from "react";
import { createRoot } from "react-dom/client";
import App from "./components/App";
import { io } from 'socket.io-client'
const socket = io();

const root = createRoot(document.getElementById('root'));
root.render(
  <>
    <h1>Coffe Time</h1>
    <div>
      <App />
    </div>
  </>
);


// const sendMessage = () => {
//   socket.emit('frontendMessage', '{username: test}')
// }
