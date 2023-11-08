import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";
import PageTitle from "../Helmet/PageTitle";

import useAxios from "../hook/useAxios";

const MyBookings = () => {
  const { user, token } = useContext(AuthContext);
  const [bookings, setBookings] = useState([]);
  const axiosSecure = useAxios();
  const url = `/bookings?email=${user?.email}`;

  useEffect(() => {
    if (token) {
      axiosSecure.get(url).then((res) => setBookings(res.data));
    }
  }, [url, axiosSecure, token]);
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
          fetch(`https://voyagelodge.vercel.app/bookings/${id}`, {
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

                const remaining = bookings.filter(
                  (booking) => booking._id !== id
                );
                setBookings(remaining);
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
        {bookings.length > 0 ? (
          bookings.map((bk) => (
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
                      <button className="btn btn-warning">
                        Update Booking
                      </button>
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
          ))
        ) : (
          <div className="bg-yellow-100 p-4 text-center flex justify-center ">
            <p className="text-yellow-700">
              We&apos;re sorry, but you don&apos;t have any bookings right now.
              Please check back later for available bookings.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyBookings;
