import React, { useState, useEffect } from "react";
import Event from "./Event";


function EventsList(props) {

 

  let colorCounter = 0;

  const parseInput = (message) => {
    colorCounter = 0;
    const res = [];
    if (Array.isArray(message)) {
      for (const elem of message) {
        if (colorCounter > 3) colorCounter = 0;
        res.push(<Event host={elem.host} details={elem.details.title} colorCounter={colorCounter} />);
        setEvents([...events, ...res]);
        colorCounter++;
      }
    }
  }

  const [events, setEvents] = useState([]);

  //useEffect here is for loading events on the first load of the page (dependancy is [])
  useEffect(() => {
    //we emit an event of loadEvents to the server, which will query the DB and send back all events with the same event type of loadEvents
    props.socket.emit('initialLoad', 'testMessage')
    props.socket.on('initialLoad', (message) => {
      parseInput(message);
    })
  }, [])
  
  //useEffect here runs on every reload, it grabs the response from the server each time we add or load the page
  useEffect(() => {
    colorCounter = 0;
    console.log('2nd useEffect')
    props.socket.on('loadEvents', (message) => {
      parseInput(message);
    })
  })

  props.socket.on('initialLoad', (data) => {
    parseInput(data);
  })
  
  return (
    <div id='events-list'>
      {events}
    </div>
  );
}

export default EventsList;
