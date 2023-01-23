import React, { useState } from "react";
import CreateForm from "./CreateForm";
import EventsList from "./EventsList";
import { io } from 'socket.io-client'
const socket = io();
//this socket is the socket.io connection to the backend. Look into the docs for how it works, but it is basically Node's event listener and after it opens a connection
//you listen for events with .on and send events with .emit, where the first arg is the type of event, and the second arg is the message to send (applies for front and backend)

//create App that passes down the instance of socket to its children. This stops us from opening multiple connections with the server.
function App() {
  return (
    <div id='App'>
      <CreateForm socket={socket } />
      <EventsList socket={socket} />
    </div>
  );
}

export default App;
