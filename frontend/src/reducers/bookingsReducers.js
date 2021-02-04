import {
  ADD_BOOKING,
  GET_BOOKING,
  REQUEST_BOOKINGS,
} from "../constants/bookingsConstants";

export const bookingsListReducers = (state = { bookings: [] }, action) => {
  switch (action.type) {
    case REQUEST_BOOKINGS:
      return {
        loading: true,
        bookings: [],
      };
    case GET_BOOKING:
      return {
        loading: false,
        bookings: action.payload,
      };
    default:
      return state;
  }
};

export const addNewBookReducers = (state = {}, action) => {
  switch (action.type) {
    case ADD_BOOKING:
      return { book: action.payload };
    default:
      return state;
  }
};
