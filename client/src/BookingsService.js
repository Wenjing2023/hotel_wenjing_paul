const baseURL = "http://localhost:9000/api/bookings/";

export const getBookings = () => {
  return fetch(baseURL).then((res) => res.json());
};

export const deleteBooking = (id) => {
  return fetch(baseURL + id, {
    method: "DELETE",
  });
};

export const postBooking = (newBooking) => {
  return fetch(baseURL, {
    method: "POST",
    body: JSON.stringify(newBooking),
    headers: { "Content-Type": "application/json" },
  })
    .then((res) => res.json())
    .then((data) => {
      return { ...data, ...newBooking };
    });
};
