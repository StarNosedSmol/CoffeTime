import React, { useState } from "react";


function CreateForm(props) {
  //useState hooks that saves the input fields data automatically
  const [host, useHost] = useState('');
  const [event, useEvent] = useState('');

  // handle submit event handler that onlcick of the button, grab host and event and emit it to the backend 
  const handleSubmit = (e) => {
    //stop page from refreshing and losing connection to socket
    e.preventDefault();
    //send a newEvent type event to the backend, which knows to add this into the db.
    props.socket.emit('newEvent', {'host': host, created: new Date(), details: {'title': event, 'date': new Date()}})
  }

  //onChange lets us dynamically grab the values in the form and send to state
  //handleSubmit will run when we submit and send the data back to db

  return (
    <div id='create-form'>
      <h2>Create an event</h2>
      <form onSubmit={(e)=>{handleSubmit(e)}}>
        <label> Host
          <input type='text' onChange={(e) => useHost(e.target.value)} />
        </label> 
        <label>Event
          <input type='text' onChange={(e) => useEvent(e.target.value)} />
        </label>
          <button>Submit</button>
      </form>
    </div>
  );
}

export default CreateForm;
