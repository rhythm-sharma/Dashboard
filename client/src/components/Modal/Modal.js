import React, { Component } from "react";
import Modal from "react-bootstrap/Modal";
import Calender from "../Calender/Calender";
import TimeLine from "../Timeline/Timeline";
import "./Modal.scss";

class ActivityModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentLayout: "timeline", // setting the initial layout as TimeLine
    };
  }

  /*
    It handles the layout of Modal
    Modal has two types of layout supported
    1. Timeline  
    2. Calender
  */
  handleViewBtnToggle = (btn) => {
    this.setState({ currentLayout: btn });
  };

  render() {
    const { activityData } = this.props;
    const { currentLayout } = this.state;

    return (
      <Modal
        size="lg"
        show={this.props.showModal}
        onHide={() => this.props.setShowModal(false)}
        aria-labelledby="activity-modal"
        className="ff-sora"
        dialogClassName="modal-90w"
      >
        <Modal.Header closeButton>
          <Modal.Title id="activity-modal">Activity period</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="modal-body-container">
            <div className="btn-group mb-5" role="group" aria-label="group">
              <button
                type="button"
                className={
                  currentLayout === "timeline" ? "btn cover" : "btn outline"
                }
                onClick={() => this.handleViewBtnToggle("timeline")}
              >
                Timeline <i className="fas fa-list  ml-2"></i>
              </button>
              <button
                type="button"
                className={
                  currentLayout === "calender" ? " btn cover" : "btn outline"
                }
                onClick={() => this.handleViewBtnToggle("calender")}
              >
                Calender <i className="far fa-calendar-alt ml-2"></i>
              </button>
            </div>
            {currentLayout === "timeline" ? (
              <TimeLine activityPeriods={activityData.activity_periods} />
            ) : (
              <Calender activityPeriods={activityData.activity_periods} />
            )}
          </div>
        </Modal.Body>
      </Modal>
    );
  }
}

export default ActivityModal;
