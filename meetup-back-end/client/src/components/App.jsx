import React from 'react';

import axios from 'axios';

import AttendeeForm from './AttendeeForm.jsx';
import AttendeeList from './AttendeeList.jsx';

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      attendees: [],
    };
    this.addAttendee = this.addAttendee.bind(this);
    this.getAttendees = this.getAttendees.bind(this);
    this.deleteAttendee = this.deleteAttendee.bind(this);
  }

  componentDidMount() {
    this.getAttendees();
  }

  getAttendees() {
    axios.get('/attendees')
      .then(res => {
        this.setState({
          attendees: res.data,
        });
      });
  }

  addAttendee(attendee) {
    axios.post('/attendees', attendee)
      .then(() => {
        this.getAttendees();
      });
  }

  deleteAttendee(id) {
    console.log("Deleted", id)
    axios.delete(`/attendees/${id}`)
      .then(() => {
        this.getAttendees();
      });
  }

  render() {
    return (
      <div className="main">
        <AttendeeForm addAttendee={this.addAttendee} />
        <AttendeeList attendees={this.state.attendees} deleteAttendee={this.deleteAttendee} />
      </div>);
  }
}

export default App;
