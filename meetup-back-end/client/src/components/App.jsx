import React from 'react';

import axios from 'axios';

import AttendeeForm from './AttendeeForm.jsx';
import AttendeeList from './AttendeeList.jsx';

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      attendees: [],
      error: '',
    };
    this.addAttendee = this.addAttendee.bind(this);
    this.getAttendees = this.getAttendees.bind(this);
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
      .then((err) => {
        if (err) {
          this.setState({
            error: err,
          })
        }
          this.getAttendees();
      });
  }

  render() {
    let error = this.state.error.length > 0;
    return (
      <div className="main">
        <AttendeeForm addAttendee={this.addAttendee} />
        <AttendeeList attendees={this.state.attendees} />
        {error ? <h4>{this.state.error}</h4> : null}
      </div>);
  }
}

export default App;
