import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const RoomCard = ({ room }) => {
  const { img1, price_per_night, name, offer_price, _id } = room;
  return (
    <Link to={`/rooms/${_id}`}>
      <div className="card card-compact bg-base-100 shadow-xl">
        <figure className="h-60">
          <img src={img1} alt={name} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p className="font-bold line-through text-red-700 ">
            Price: ${price_per_night}
          </p>
          <p className="font-bold text-base text-green-600">
            Offer Price: ${offer_price}
          </p>
        </div>
      </div>
    </Link>
  );
};
RoomCard.propTypes = {
  room: PropTypes.object,
};
export default RoomCard;
