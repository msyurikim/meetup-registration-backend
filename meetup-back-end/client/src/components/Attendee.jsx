import React from 'react';

const Attendee = ({ attendee, deleteAttendee }) => (
  <div>
    {`${attendee.firstName} ${attendee.lastName}`}
      <i className="fa fa-trash" onClick={()=>deleteAttendee(attendee._id)}></i>
  </div>
);

export default Attendee;