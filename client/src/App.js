import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchUserData } from "./actions/index";
import CardContainer from "./components/Card/CardContainer.js";
import "./App.scss";

class App extends Component {
  /*
    fetchUserData: It fetches the users information by updating the states using redux-thunk
  */

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchUserData());
  }

  render() {
    const { usersData } = this.props;

    return (
      <div className="main-container no-gutters">
        <nav className="navbar navbar-light bg-light">
          <a className="navbar-brand" href="#">
            FullThrottle <b>Labs</b>
          </a>
        </nav>
        <div className="body-container">
          <div
            className={
              usersData.fetchingState === "loading" &&
              "loading-container " +
                "card-container card-group align-content-center p-3"
            }
          >
            {usersData.fetchingState === "loading" && (
              <div class="spinner-border spinner-container">
                <span class="sr-only">Loading...</span>
              </div>
            )}
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
