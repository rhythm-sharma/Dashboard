import { combineReducers } from "redux";
import {
  REQUEST_USERDATA,
  RECEIVE_USERDATA,
  RECEIVE_USERDATA_ERROR,
} from "../constants/ActionTypes";

export function usersData(
  state = {
    fetchingState: "",
    userData: {},
  },
  action
) {
  switch (action.type) {
    case REQUEST_USERDATA:
      return Object.assign({}, state, {
        fetchingState: "loading",
      });
    case RECEIVE_USERDATA:
      return Object.assign({}, state, {
        fetchingState: "success",
        userData: action.userData,
      });
    case RECEIVE_USERDATA_ERROR:
      return Object.assign({}, state, {
        fetchingState: "error",
        userData: action.error,
      });
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  usersData,
});

export default rootReducer;
