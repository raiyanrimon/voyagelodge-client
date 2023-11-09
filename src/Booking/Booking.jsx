import { useContext, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import { toast } from "react-toastify";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import PageTitle from "../Helmet/PageTitle";

const Booking = () => {
  const room = useLoaderData();
  const { img1, name, offer_price, description } = room;
  const { user } = useContext(AuthContext);
  const [selectedDate, setSelectedDate] = useState(null);

  const handleBook = (e) => {
    e.preventDefault();
    const form = e.target;
    const customer = form.customer.value;
    const email = form.email.value;
    const booking = {
      name,
      email,
      customer,
      date: selectedDate,
      img1,
      offer_price,
    };

    fetch("https://voyagelodge.vercel.app/bookings", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        toast.success("Booking Completed Successfully");
      });
  };

  return (
    <div>
      <PageTitle title="Booking | VoyageLodge" />
      <form className="card-body" onSubmit={handleBook}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              name="customer"
              defaultValue={user?.displayName}
              placeholder="Name"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Date</span>
            </label>
            <DatePicker
              selected={selectedDate}
              onChange={(date) => setSelectedDate(date)}
              dateFormat="dd/MM/yyyy"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              defaultValue={user?.email}
              placeholder="Email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Price</span>
            </label>
            <input
              type="text"
              defaultValue={`$${offer_price}`}
              className="input input-bordered"
              required
              readOnly
            />
          </div>
          <div className="md:col-span-2">
            <h2 className="text-xl font-bold">{name}</h2>
            <p className="font-medium">{description}</p>
          </div>
        </div>
        <div className="form-control mt-6">
          <input
            className="btn btn-neutral"
            type="submit"
            value="Confirm Booking"
          />
        </div>
      </form>
    </div>
  );
};

export default Booking;
