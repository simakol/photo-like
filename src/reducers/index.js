import { combineReducers } from "redux";
import posts from "./posts";
import modalWindow from "./modalWindow";

const rootReducer = combineReducers({
  posts,
  modalWindow
});

export default rootReducer;
