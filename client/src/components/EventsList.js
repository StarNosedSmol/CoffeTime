import React, { useState, useEffect } from "react";
import Event from "./Event";


function EventsList(props) {

  const [events, setEvents] = useState([]);

  //useEffect here is for loading events on the first load of the page (dependancy is [])
  useEffect(() => {
    console.log('emitting event!')
    //we emit an event of loadEvents to the server, which will query the DB and send back all events with the same event type of loadEvents
    props.socket.emit('loadEvents', 'testMessage')
  }, [])
  
  //useEffect here runs on every reload, it grabs the response from the server each time we add or load the page
  useEffect(() => {
    console.log('2nd useEffect')
    props.socket.on('loadEvents', (message) => {
      console.log(message);
      const res = [];
      if (Array.isArray(message)) {
        for (const elem of message) {
          res.push(<Event host={elem.host} details={elem.details.title} />);
          setEvents([...events, ...res]);
        }
      }
    })
  })
  
  return (
    <div id='events-list'>
      <h2>Upcoming Events</h2>
      {events}
    </div>
  );
}

export default EventsList;
