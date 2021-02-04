import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Card, Spin, Space } from "antd";
import { getBookings } from "../actions/bookingsActions";

const Bookings = () => {
  const dispatch = useDispatch();

  const bookingsList = useSelector((state) => state.bookingsList);
  const { bookings, loading } = bookingsList;

  useEffect(() => {
    dispatch(getBookings());
  }, []);

  return (
    <div
      className="container site-card-border-less-wrapper"
      style={{
        display: "flex",
        flexWrap: "wrap",
        background: "#dedede",
        height: "100vh",
      }}
    >
      {loading ? (
        <Space
          size="middle"
          style={{
            justifyContent: "center",
            width: "100%",
          }}
        >
          <Spin size="large" />
        </Space>
      ) : (
        bookings.map((book) => (
          <Card
            key={book._id}
            title={book.name}
            bordered={true}
            style={{ width: 300, height: 300, margin: 10 }}
          >
            <p>DESTINATION : {book.destination}</p>
            <p>DEPARTURE TIME : {book.depTime}</p>
            <p>RETURN TIME :{book.returnTime}</p>
            <p>REASON :{book.reason}</p>
          </Card>
        ))
      )}
    </div>
  );
};

export default Bookings;
