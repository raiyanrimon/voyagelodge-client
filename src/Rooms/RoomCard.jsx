import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const RoomCard = ({ room }) => {
  const { img1, price_per_night, name, offer_price, _id } = room;
  return (
    <Link to={`/rooms/${_id}`} className="block">
      <div className="card card-compact bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-lg overflow-hidden">
        <figure className="h-60 overflow-hidden">
          <img src={img1} alt={name} className="w-full h-full object-cover" />
        </figure>
        <div className="card-body p-4">
          <h2 className="card-title text-2xl font-semibold">{name}</h2>
          <p className="font-bold line-through text-red-500">
            Price: ${price_per_night}
          </p>
          <p className="font-bold text-green-600">
            Offer Price: ${offer_price}
          </p>
        </div>
      </div>
    </Link>
  );
};

RoomCard.propTypes = {
  room: PropTypes.object.isRequired,
};

export default RoomCard;
