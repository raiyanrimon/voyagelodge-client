import { useContext, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import { toast } from "react-toastify";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import PageTitle from "../Helmet/PageTitle";

const UpdateBooking = () => {
  const room = useLoaderData();
  const { _id, name, img1, offer_price, date } = room;
  const { user } = useContext(AuthContext);
  const [selectedDate, setSelectedDate] = useState(new Date(date));

  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const customer = form.customer.value;
    const email = form.email.value;
    const updatedDate = selectedDate.toISOString().split("T")[0];
    const booking = {
      name,
      email,
      customer,
      date: updatedDate,
      img1,
      offer_price,
    };

    fetch(`https://voyagelodge.vercel.app/bookings/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          toast.info("Booking Updated Successfully");
        }
      });
  };

  return (
    <div>
      <PageTitle title="Update Booking | VoyageLodge" />
      <form className="card-body" onSubmit={handleUpdate}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              name="customer"
              readOnly
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
              readOnly
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
              readOnly
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
            value="Update Booking"
          />
        </div>
      </form>
    </div>
  );
};

export default UpdateBooking;
