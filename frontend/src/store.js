import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import {
  addNewBookReducers,
  bookingsListReducers,
} from "./reducers/bookingsReducers";

const reducers = combineReducers({
  bookingsList: bookingsListReducers,
  addNewBook: addNewBookReducers,
});

const middleware = [thunk];

const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
