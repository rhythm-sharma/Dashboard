import React, { Component } from "react";
import { Calendar, momentLocalizer, Views } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";

moment.locale("en-GB");

// const allViews = Object.keys(BigCalendar.Views).map(
//   (k) => BigCalendar.Views[k]
// );

class Calender extends Component {
  constructor(props) {
    super(props);
    this.state = {
      events: [
        {
          id: 0,
          title: "",
          start: new Date(2020, 7, 25),
          end: new Date(2020, 7, 25),
        },
        {
          id: 1,
          title: "",
          start: new Date(),
          end: new Date(),
        },
      ],
    };
  }

  render() {
    const { events } = this.state;
    return (
      <Calendar
        events={events}
        views={Object.keys(Views).map((k) => Views[k])}
        defaultDate={new Date()}
        step={15}
        timeslots={4}
        localizer={momentLocalizer(moment)}
      />
    );
  }
}

export default Calender;
