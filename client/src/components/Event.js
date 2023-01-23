import React, { useState } from "react";

//containers for individual events
function Event(props) {
  return (
    <div className='event'>
      <h3 className='event-name'>{props.details}</h3>

      <div className='host-info'>
        <h4 className='host-label'>Host</h4>
        <h5 className='host-name'>{props.host}</h5>
      </div>
    </div>
  );
}

export default Event;
