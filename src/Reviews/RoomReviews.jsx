import { useEffect, useState } from "react";
import { AiFillStar } from "react-icons/ai";
import PropTypes from "prop-types";

const RoomReviews = ({ roomName }) => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    // Fetch reviews for the specific room from your backend API
    fetch(`http://localhost:5000/reviews/${roomName}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setReviews(data);
      });
  }, [roomName]);

  return (
    <div>
      <h2 className="text-4xl font-bold my-5">Reviews</h2>
      <div className="grid grid-cols-1 md:grid-cols-2">
        {reviews.map((review) => (
          <div key={review._id}>
            <p className="text-xl font-semibold">Username: {review.username}</p>
            <p className="flex">
              Rating: {review.rating}
              <AiFillStar className="text-xl" />
            </p>
            <p className="text-lg">Comment: &quot; {review.comment} &quot;</p>
            <p>{review.timestamp}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

RoomReviews.propTypes = {
  roomName: PropTypes.string,
};

export default RoomReviews;
