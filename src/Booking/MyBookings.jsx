import { useContext, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";
import PageTitle from "../Helmet/PageTitle";

const MyBookings = () => {
  const bookings = useLoaderData();

  const { user } = useContext(AuthContext);
  const booking = bookings.filter((booking) => booking.email === user?.email);
  const [book, setBook] = useState(booking);

  const handleDeleteBooking = (id, bookingDate) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Cancel Booking",
    }).then((result) => {
      if (result.isConfirmed) {
        const currentDate = new Date();
        const parsedBookingDate = new Date(bookingDate);
        const oneDayInMiliSec = 24 * 60 * 60 * 1000;

        const timeDifference = parsedBookingDate - currentDate;

        if (timeDifference > oneDayInMiliSec) {
          fetch(`http://localhost:5000/bookings/${id}`, {
            method: "DELETE",
          })
            .then((res) => res.json())
            .then((data) => {
              console.log(data);
              if (data.deletedCount > 0) {
                Swal.fire({
                  title: "Deleted!",
                  text: "Your booking has been canceled.",
                  icon: "success",
                });

                const remaining = book.filter((booking) => booking._id !== id);
                setBook(remaining);
              }
            });
        } else {
          Swal.fire({
            title: "Cannot Cancel",
            text: "You cannot cancel this booking within 1 day of the booking date.",
            icon: "error",
          });
        }
      }
    });
  };

  return (
    <div className="space-y-5">
      <PageTitle title="My Bookings | VoyageLodge" />
      <h2 className="text-center text-3xl font-bold">My Bookings</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {book.map((bk) => (
          <div key={bk._id}>
            <div
              key={bk._id}
              className="card card-compact  bg-base-100 shadow-xl"
            >
              <figure>
                <img src={bk.img1} alt={bk.name} />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{bk.name}</h2>
                <p className="font-semibold">Date: {bk.date}</p>
                <div className="card-actions justify-between  ">
                  <Link to={`/booking-update/${bk._id}`}>
                    <button className="btn btn-warning">Update Booking</button>
                  </Link>
                  <button
                    onClick={() => handleDeleteBooking(bk._id, bk.date)}
                    className="btn btn-error"
                  >
                    Cancel Booking
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyBookings;
