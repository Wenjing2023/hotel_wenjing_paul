import BookingsCard from "./BookingsCard";
const BookingsGrid = ({ bookings, removeBooking }) => {
  const bookingsList = bookings.map((booking, index) => {
    return (
      <BookingsCard
        key={index}
        booking={booking}
        removeBooking={removeBooking}
      />
    );
  });
  return (
    <>
      <h3>Bookings Grid</h3>
      {bookingsList}
    </>
  );
};

export default BookingsGrid;
