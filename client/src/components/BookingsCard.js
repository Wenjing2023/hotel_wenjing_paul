import { deleteBooking } from "../BookingsService";

const BookingsCard = ({ booking, removeBooking }) => {
  //   console.log(booking);
  const handleClick = () => {
    deleteBooking(booking._id).then(() => {
      removeBooking(booking._id);
    });
  };
  return (
    <>
      <p>{booking.name}</p>
      <p>{booking.email}</p>
      <p> {JSON.stringify(booking.checked_in)}</p>
      <button onClick={handleClick}>Delete</button>
    </>
  );
};

export default BookingsCard;
