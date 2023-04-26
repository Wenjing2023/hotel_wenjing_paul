import { useState } from "react";
import { postBooking } from "../BookingsService";

const BookingsForm = ({ addBooking }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    checked_in: true,
  });

  const handleChange = (e) => {
    //
    const newFormData = { ...formData };
    newFormData[e.target.name] = e.target.value;
    setFormData(newFormData);
  };

  const onSubmit = (e) => {
    console.log(e);
    e.preventDefault();
    postBooking(formData).then((data) => {
      addBooking(data);
    });
    setFormData({
      name: "",
      email: "",
      checked_in: true,
    });
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <h3>Enter your information:</h3>
        <label htmlFor="name">Name: </label>
        <input
          onChange={handleChange}
          type="text"
          name="name"
          id="name"
          value={formData.name}
        />
        <br />
        <label htmlFor="email">Email: </label>
        <input
          onChange={handleChange}
          type="text"
          name="email"
          id="email"
          value={formData.email}
        />
        <br />
        <label htmlFor="checked_in">Checked in: </label>
        <input
          onChange={handleChange}
          type="checkbox"
          name="checked_in"
          id="checked_in"
          value={formData.checked_in}
        />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </>
  );
};

export default BookingsForm;
