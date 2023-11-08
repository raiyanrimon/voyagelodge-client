import { toast } from "react-toastify";
import PropTypes from "prop-types";

const ReviewForm = ({ roomName }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const username = form.username.value;
    const rating = form.rating.value;
    const comment = form.comment.value;
    const review = {
      username,
      rating,
      comment,
      timestamp: new Date().toLocaleString(),
      name: roomName,
    };
    console.log(review);

    fetch("https://voyagelodge.vercel.app/reviews", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(review),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        toast.success("Review Added Successfully ");
      });
  };

  return (
    <div>
      <div className="hero-content flex-col">
        <div className="text-center">
          <h1 className="text-3xl font-bold">Share Your Experience</h1>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm  ">
          <form className="card-body" onSubmit={handleSubmit}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">UserName</span>
              </label>
              <input
                type="text"
                name="username"
                placeholder="UserName"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Rating</span>
              </label>
              <input
                type="number"
                name="rating"
                min="0"
                max="5"
                step="1"
                placeholder="your experience out of 5"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Comment</span>
              </label>
              <input
                type="text"
                name="comment"
                placeholder="Your comment"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-accent">Submit Review</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

ReviewForm.propTypes = {
  roomName: PropTypes.string,
};

export default ReviewForm;
