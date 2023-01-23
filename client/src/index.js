import React from 'react';
import { createRoot } from 'react-dom';
import App from './components/App';
import { io } from 'socket.io-client';
const socket = io('http://localhost:3000');

const root = createRoot(document.getElementById('root'));
root.render(
  <>
    <h1>Coffe Time</h1>
    <div>
      <App />
    </div>
  </>
);

// Once connect, show Client conected and load all events from database
socket.on('connect', () => {
  console.log('Client connected');
  //send action 'loadEvents' to server
  socket.emit('loadEvents', (message) => {
    displayMessage(message);
  });
  //load events from server by websocket action 'loadEvents'
  socket.on('loadEvents', (events) => {
    console.table(events);
  });
});

//Once the eventlistener is ready, use this to send data through websocket to server side.
example.addEventListener('click', () => {
  const valueOfInputBox = document.querySelector('input');
  //send action 'newEvent' to server with name, time and event description
  socket.emit('newEvent', valueOfInputBox);
});

// const sendMessage = () => {
//   socket.emit('frontendMessage', '{username: test}')
// }
