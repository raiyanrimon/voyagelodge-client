import { useLoaderData } from "react-router-dom";
import RoomCard from "./RoomCard";
import { useState } from "react";
import PageTitle from "../Helmet/PageTitle";

const Rooms = () => {
  const rooms = useLoaderData();
  const [roomData, setRoomData] = useState(rooms);

  const sortProductsByPrice = (e) => {
    if (e.target.value === "lowest") {
      const sortedRooms = [...roomData].sort(
        (a, b) => a.price_per_night - b.price_per_night
      );
      setRoomData(sortedRooms);
    }
    if (e.target.value === "highest") {
      const sortedRooms = [...roomData].sort(
        (a, b) => b.price_per_night - a.price_per_night
      );
      setRoomData(sortedRooms);
    }
  };
  return (
    <div className="space-y-5">
      <PageTitle title="Rooms | VoyageLodge" />
      <form>
        <label className="font-semibold">Filter by Price</label>
        <select
          className="ml-3"
          onChange={(e) => sortProductsByPrice(e)}
          name="filter"
          id=""
        >
          <option value="#"></option>
          <option value="lowest">Low to High</option>
          <option value="highest">High to Low</option>
        </select>
      </form>
      <div>
        <h1 className="text-center font-bold text-4xl text-gray-500">
          Our Rooms
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {roomData.map((room) => (
          <RoomCard key={room._id} room={room}></RoomCard>
        ))}
      </div>
    </div>
  );
};

export default Rooms;
