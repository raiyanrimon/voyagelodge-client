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
    <div className="container mx-auto my-8">
      <h2 className="text-center text-3xl font-bold mb-5">Featured Rooms</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {rooms.slice(6).map((room) => (
          <div key={room._id} className="bg-white rounded-lg shadow-lg">
            <img
              className="w-full h-64 object-cover rounded-t-lg"
              src={room.img1}
              alt={room.name}
            />
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-2">{room.name}</h2>
              <p className="text-gray-600 mb-4">{room.short_description}</p>
              <div>
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
