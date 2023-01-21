import React, { useState } from "react";
import CreateForm from "./CreateForm";
import EventsList from "./EventsList";

function App() {
  return (
    <div id='App'>
      <CreateForm />
      <EventsList />
    </div>
  );
}

export default App;
