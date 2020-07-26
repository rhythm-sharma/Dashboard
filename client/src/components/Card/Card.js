import React, { Component } from "react";
import ActivityModal from "../Modal/Modal";
import "./Card.scss";

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
    };
  }

  /*
    Handles the show and hide event of Modal
    It is passed down to ActivityModal(child component) as a callback
  */
  setShowModal = (arg) => {
    this.setState({ showModal: arg });
  };

  render() {
    return (
      <div className="col-xs-6 col-sm-6 col-md-3 m-3">
        <div className="card shadow-lg">
          <div className="card-body text-center">
            <img
              className="avatar mb-4"
              src={this.props.item.profile_url}
              alt=""
            />
            <p className="card-title font-weight-bold">
              {this.props.item.real_name || ""}
            </p>
            <p className="card-sub-title text-muted">
              {this.props.item.tz || ""}
            </p>
            <button
              className="btn btn-outline-info"
              onClick={() => this.setShowModal(true)}
            >
              Time Line
            </button>
          </div>
        </div>
        <ActivityModal
          showModal={this.state.showModal}
          setShowModal={this.setShowModal}
          activityData={this.props.item}
        />
      </div>
    );
  }
}

export default Card;
