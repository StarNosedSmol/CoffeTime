import React, { useEffect, } from "react";

//containers for individual events
function Event(props) {

  const colors = ['#E4C988', '#C27664', '#B05A7A', '#84D2C5'];
  const styleObj = {
    'font-size':' 52px',
  'font-weight': 500,
 'text-decoration': 'underline',
  'text-decoration-color': colors[props.colorCounter],
  'text-decoration-thickness': '9px',
  'text-underline-position': 'auto',
  };



  return (
    <div className='event'>
      <h3 className='event-name' style={styleObj}>{props.details}</h3>

      <div className='host-info'>
        <h4 className='host-label'>with</h4>
        <h5 className='host-name'>{props.host}</h5>
      </div>
    </div>
  );
}

export default Event;
