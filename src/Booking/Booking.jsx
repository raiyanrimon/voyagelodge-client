import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import { toast } from "react-toastify";

const Booking = () => {
  const room = useLoaderData();
  const { img1, name, offer_price } = room;
  const { user } = useContext(AuthContext);
  const handleBook = (e) => {
    e.preventDefault();
    const form = e.target;
    const customer = form.customer.value;
    const date = form.date.value;
    const email = form.email.value;
    const order = {
      name,
      email,
      customer,
      date,
      img1,
    };
    fetch("http://localhost:5000/bookings", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(order),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        toast.success("Booking Completed Successfully");
      });
    console.log(order);
  };
  return (
    <div>
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
            <input
              type="date"
              name="date"
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
              placeholder="email"
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
            />
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
