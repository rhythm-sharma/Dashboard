import React, { Component } from "react";
import { Calendar, momentLocalizer, Views } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "./Calender.scss";

moment.locale("en-GB");

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
      views: ["week", "day"],
      defaultView: "week",
    };
  }

  //   componentDidMount() {
  //     window.addEventListener("resize", this.resize);
  //     this.resize();
  //   }

  //   resize = () => {
  //     if (window.innerWidth <= 500) {
  //       this.setState({
  //         views: ["day"],
  //         defaultView: "day",
  //       });
  //     }
  //   };

  render() {
    const { events, views, defaultView } = this.state;
    return (
      <Calendar
        events={events}
        defaultView={defaultView}
        views={views}
        defaultDate={new Date()}
        step={15}
        timeslots={4}
        localizer={momentLocalizer(moment)}
      />
    );
  }
}

export default Calender;
