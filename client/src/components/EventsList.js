import React, { useState } from "react";
import Event from "./Event";

function EventsList() {
  return (
    <div id='events-list'>
      <h2>Upcoming Events</h2>
      <Event />
    </div>
  );
}

export default EventsList;
