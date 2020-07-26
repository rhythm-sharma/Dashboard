import {
  REQUEST_USERDATA,
  RECEIVE_USERDATA,
  RECEIVE_USERDATA_ERROR,
} from "../constants/ActionTypes";

function requestUserData() {
  return {
    type: REQUEST_USERDATA,
  };
}

function receiveUserData(json) {
  return {
    type: RECEIVE_USERDATA,
    userData: json,
  };
}

function receiveUserDataErr(error) {
  return {
    type: RECEIVE_USERDATA_ERROR,
    error,
  };
}

export function fetchUserData() {
  return (dispatch) => {
    dispatch(requestUserData());
    return fetch(`api/v1/users`)
      .then((res) => res.json())
      .then((json) => dispatch(receiveUserData(json)))
      .catch((err) => dispatch(receiveUserDataErr(err)));
  };
}
