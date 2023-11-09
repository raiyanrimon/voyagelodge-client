import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const FeaturedRooms = () => {
  const [rooms, setRooms] = useState([]);
  useEffect(() => {
    fetch("https://voyagelodge.vercel.app/rooms")
      .then((res) => res.json())
      .then((data) => {
        setRooms(data);
      });
  }, []);
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {rooms.slice(6).map((room) => (
          <div key={room._id} className="card  bg-base-100 shadow-xl">
            <figure>
              <img className="h-[300px]" src={room.img1} alt={room.name} />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{room.name}</h2>
              <p>{room.short_description}</p>
              <div className="card-actions ">
                <Link to={`/booking/${room._id}`}>
                  <button className="btn btn-primary">Book Now</button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedRooms;
