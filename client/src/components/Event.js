import React, { useEffect, } from "react";

//containers for individual events
function Event(props) {

  let eventTime = props.eventTime.slice(0, 2);
  let eventCopy = props.eventTime;

  if (Number(eventTime) > 12) {
    let replaceStr = (Number(eventTime) - 12).toString();
    j
    eventCopy = replaceStr + eventCopy.slice(2);
    eventCopy += ' PM'
  } else {
    eventCopy += ' AM'
  }

  const colors = ['#E4C988', '#C27664', '#B05A7A', '#84D2C5'];
  const styleObj = {
  fontSize:' 52px',
  'fontWeight': 500,
  'textDecoration': 'underline',
  'textDecorationColor': colors[props.colorCounter],
  'text-decoration-thickness': '9px',
  'textUnderlinePosition': 'auto',
  };



  return (
    <div className='event'>
      <h3 className='event-name' style={styleObj}>{`${props.details} @${eventCopy}`}</h3>
      <div className='host-info'>
        <h4 className='host-label'>with</h4>
        <h5 className='host-name'>{props.host}</h5>
      </div>
    </div>
  );
}

export default Event;
