import React from "react";
import { createRoot } from "react-dom/client";
import App from "./components/App";
import { io } from 'socket.io-client'
const socket = io();

const root = createRoot(document.getElementById("root"));
root.render(
  <>
    <h1>Coffe Time</h1>
    <div>
      <App />
    </div>
  </>
);

// socket.on('banana', (message) => {
//   console.log('From server banana: ', message);
//   document.querySelector('.chat').innerHTML = message;
// })


// const sendMessage = () => {
//   socket.emit('frontendMessage', '{username: test}')
// }