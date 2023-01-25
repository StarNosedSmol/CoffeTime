import React, { useState } from "react";
import { io } from 'socket.io-client'

function Login(props) {

  return (
    <div id="loginContainer">
      <h2>Login ☕️</h2>
      <input id="username" placeholder="username" />
      <input type="password" id="password" placeholder="password" />
      <button id="loginButton" >Login</button>
    </div>
  )
}

export default Login;