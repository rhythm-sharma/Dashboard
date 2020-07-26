import React, { Component } from "react";
import Modal from "react-bootstrap/Modal";
import Calender from "../Calender/Calender";
import "./Modal.scss";

class ActivityModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentBtn: "timeline",
    };
  }

  componentDidMount() {
    console.log("activityData: ", this.props.activityData);
  }

  extractTime = (time) => {
    return time.split(" ")[time.split(" ").length - 1];
  };

  handleDatePrefix = (date) => {
    return date.length === 1 ? "0" + date : date;
  };

  handleViewBtnToggle = (btn) => {
    this.setState({ currentBtn: btn });
  };

  render() {
    const { activityData } = this.props;
    const { currentBtn } = this.state;

    let timeLine = activityData.activity_periods.map((item, index) => {
      if (index % 2 === 0) {
        return (
          <li key={index}>
            <div className="timeline-badge info"></div>
            <div className="timeline-panel">
              <div className="timeline-time">
                <p className="start-title">
                  {this.extractTime(item.start_time)}
                </p>
                <p className="text-muted">{this.extractTime(item.end_time)}</p>
              </div>
              <div className="timeline-date">
                <div>{item.start_time.split(" ")[0]}</div>
                <div>
                  {this.handleDatePrefix(item.start_time.split(" ")[1])}
                </div>
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
                  {this.extractTime(item.start_time)}
                </p>
                <p className="text-muted">{this.extractTime(item.end_time)}</p>
              </div>
              <div className="timeline-date">
                <div>{item.start_time.split(" ")[0]}</div>
                <div>
                  {this.handleDatePrefix(item.start_time.split(" ")[1])}
                </div>
                <div>{item.start_time.split(" ")[2]}</div>
              </div>
            </div>
          </li>
        );
      }
    });

    return (
      <Modal
        size="lg"
        show={this.props.showModal}
        onHide={() => this.props.setShowModal(false)}
        aria-labelledby="modal-sizes-title-lg"
        className="ff-sora"
        dialogClassName="modal-90w"
      >
        <Modal.Header closeButton>
          <Modal.Title id="modal-sizes-title-lg">Activity period</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="modal-body-container">
            <div
              className="btn-group mb-5"
              role="group"
              aria-label="Basic example"
            >
              <button
                type="button"
                className={
                  currentBtn === "timeline" ? "btn cover" : "btn outline"
                }
                onClick={() => this.handleViewBtnToggle("timeline")}
              >
                Timeline <i className="fas fa-list  ml-2"></i>
              </button>
              <button
                type="button"
                className={
                  currentBtn === "calender" ? " btn cover" : "btn outline"
                }
                onClick={() => this.handleViewBtnToggle("calender")}
              >
                Calender <i className="far fa-calendar-alt ml-2"></i>
              </button>
            </div>
            {currentBtn === "timeline" ? (
              <ul className="timeline">{timeLine}</ul>
            ) : (
              <div>
                <Calender />
              </div>
            )}
          </div>
        </Modal.Body>
      </Modal>
    );
  }
}

export default ActivityModal;
