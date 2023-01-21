import React, { useState } from "react";

function Event() {
  return (
    <div className='event'>
      <h3 className='event-name'>Coffee @ 11am</h3>

      <div className='host-info'>
        <h4 className='host-label'>Host</h4>
        <h5 className='host-name'>Garrett</h5>
      </div>
    </div>
  );
}

export default Event;
