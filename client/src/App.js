import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchUserData } from "./actions/index";
import CardContainer from "./components/Card/CardContainer.js";
import "./App.scss";

class App extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchUserData());
  }

  render() {
    const { usersData } = this.props;

    return (
      <div className="main-container no-gutters">
        <nav className="navbar navbar-light fixed-top bg-light">
          <a className="navbar-brand" href="#">
            FullThrottle <b>Labs</b>
          </a>
        </nav>
        <div className="body-container">
          <div className="card-container row p-3">
            {usersData.fetchingState === "loading" && <h2>Loading...</h2>}
            {usersData.fetchingState === "success" && (
              <CardContainer usersData={usersData} />
            )}
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { usersData } = state;
  return {
    usersData,
  };
}

export default connect(mapStateToProps)(App);
