import React, { useState, useEffect } from "react";
import BookingsForm from "./components/BookingsForm";
import BookingsGrid from "./components/BookingsGrid";
import { getBookings } from "./BookingsService";
import "./App.css";

function App() {
  const [bookings, setBookings] = useState([]);
  useEffect(() => {
    getBookings().then((allBookings) => {
      setBookings(allBookings);
    });
  });
  const removeBooking = (id) => {
    const newList = bookings.filter((booking) => {
      return booking.id !== id;
    });
    setBookings(newList);
  };
  const addBooking = (newBooking) => {
    setBookings([...bookings, newBooking]);
  };
  return (
    <div className="App">
      <BookingsForm addBooking={addBooking} />
      <BookingsGrid bookings={bookings} removeBooking={removeBooking} />
    </div>
  );
}

export default App;
