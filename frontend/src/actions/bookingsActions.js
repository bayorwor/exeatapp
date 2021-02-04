import axios from "axios";
import {
  ADD_BOOKING,
  GET_BOOKING,
  REQUEST_BOOKINGS,
} from "../constants/bookingsConstants";

//get all bookings
export const getBookings = () => async (dispatch) => {
  try {
    dispatch({ type: REQUEST_BOOKINGS });

    const { data } = await axios.get("/api/v1/books");
    dispatch({
      type: GET_BOOKING,
      payload: data,
    });
  } catch (error) {
    console.error(error);
  }
};

//create a new booking
export const addBook = (id) => async (dispatch) => {
  const { data } = await axios.post("/api/v1/books", id);

  dispatch({ type: ADD_BOOKING, payload: data });
};
