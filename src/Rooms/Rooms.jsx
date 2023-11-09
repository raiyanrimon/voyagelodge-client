import { useLoaderData } from "react-router-dom";
import RoomCard from "./RoomCard";
import { useState } from "react";
import PageTitle from "../Helmet/PageTitle";

const Rooms = () => {
  const initialRooms = useLoaderData();
  const [roomData, setRoomData] = useState(initialRooms);
  const [priceFilter, setPriceFilter] = useState({ min: 0, max: 1000 });

  const sortProductsByPrice = (e) => {
    const sortedRooms = [...initialRooms];
    if (e.target.value === "lowest") {
      sortedRooms.sort((a, b) => a.offer_price - b.offer_price);
    } else if (e.target.value === "highest") {
      sortedRooms.sort((a, b) => b.offer_price - a.offer_price);
    }
    setRoomData(sortedRooms);
  };

  const filterByPrice = () => {
    const filteredRooms = initialRooms.filter(
      (room) =>
        room.offer_price >= priceFilter.min &&
        room.offer_price <= priceFilter.max
    );
    setRoomData(filteredRooms);
  };

  const handlePriceChange = (e, type) => {
    const value = parseInt(e.target.value, 10);
    setPriceFilter({
      ...priceFilter,
      [type]: value,
    });
  };

  const handleApplyFilter = () => {
    filterByPrice();
  };

  return (
    <div className="space-y-5">
      <PageTitle title="Rooms | VoyageLodge" />

      <div className="space-y-2">
        <div>
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
        </div>
        <div>
          <label className="font-semibold">Filter by Price Range</label>
          <div className="flex items-center space-x-2">
            <input
              type="number"
              placeholder="Min"
              value={priceFilter.min}
              onChange={(e) => handlePriceChange(e, "min")}
            />
            <span>-</span>
            <input
              type="number"
              placeholder="Max"
              value={priceFilter.max}
              onChange={(e) => handlePriceChange(e, "max")}
            />
            <button className="btn btn-primary" onClick={handleApplyFilter}>
              Apply
            </button>
          </div>
        </div>
      </div>

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
