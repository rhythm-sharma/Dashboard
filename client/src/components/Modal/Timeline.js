import React from "react";

function TimeLine(props) {
  /*
        It extracted time from given date string and returns it  
    */
  const extractTime = (time) => {
    return time.split(" ")[time.split(" ").length - 1];
  };

  /*
    It adds zero as prefix if date is in between 0-9
  */
  const handleDatePrefix = (date) => {
    return date.length === 1 ? "0" + date : date;
  };

  /*
    It return from the timeLine li component and return the invewrted component if it's on odd number 
  */
  let timeLine = props.activityPeriods.map((item, index) => {
    if (index % 2 === 0) {
      return (
        <li key={index}>
          <div className="timeline-badge info"></div>
          <div className="timeline-panel">
            <div className="timeline-time">
              <p className="start-title">
                {" "}
                <span className="dots dot-online"></span>{" "}
                {extractTime(item.start_time)}
              </p>
              <p className="text-muted">
                {" "}
                <span className="dots dot-offline"></span>{" "}
                {extractTime(item.end_time)}
              </p>
            </div>
            <div className="timeline-date">
              <div>{item.start_time.split(" ")[0]}</div>
              <div>{handleDatePrefix(item.start_time.split(" ")[1])}</div>
              <div>{item.start_time.split(" ")[2]}</div>
            </div>
          </div>
        </li>
      );
    } else {
      return (
        <li key={index} className="timeline-inverted">
          <div className="timeline-badge warning"></div>
          <div className="timeline-panel">
            <div className="timeline-time">
              <p className="start-title">
                {" "}
                <span className="dots dot-online"></span>{" "}
                {extractTime(item.start_time)}
              </p>
              <p className="text-muted">
                {" "}
                <span className="dots dot-offline"></span>{" "}
                {extractTime(item.end_time)}
              </p>
            </div>
            <div className="timeline-date">
              <div>{item.start_time.split(" ")[0]}</div>
              <div>{handleDatePrefix(item.start_time.split(" ")[1])}</div>
              <div>{item.start_time.split(" ")[2]}</div>
            </div>
          </div>
        </li>
      );
    }
  });

  return <ul className="timeline">{timeLine}</ul>;
}

export default TimeLine;
