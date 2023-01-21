import React, { useState } from "react";
import CreateForm from "./CreateForm";
import EventsList from "./EventsList";

function App() {
  return (
    <>
      <div>
        <CreateForm />
        <EventsList />
      </div>
      <div>this is our app</div>
      <div> this is the other part of our app</div>
    </>
  );
}

export default App;
