import { Link, useLoaderData } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import PageTitle from "../Helmet/PageTitle";

import { useContext, useEffect, useState } from "react";
import RoomReviews from "../Reviews/RoomReviews";
import ReviewForm from "../Reviews/ReviewForm";
import { AuthContext } from "../Provider/AuthProvider";

const RoomDetails = () => {
  const room = useLoaderData();
  const { user } = useContext(AuthContext);
  const bookingRoom = room.name;
  const [bookingData, setBookingData] = useState([]);

  useEffect(() => {
    fetch("https://voyagelodge.vercel.app/room-available")
      .then((res) => res.json())
      .then((data) => {
        setBookingData(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  console.log(bookingData);
  const isRoomBooked = bookingData.some(
    (booking) => booking.name === bookingRoom
  );
  const review = bookingData.some(
    (booking) => booking.name === bookingRoom && booking.email === user?.email
  );

  return (
    <div className="space-y-5">
      <PageTitle title={`${room.name} | VoyageLodge"`} />
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        loop={true}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
      >
        <SwiperSlide>
          <img src={room.img1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={room.img2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={room.img3} alt="" />
        </SwiperSlide>
      </Swiper>

      <div className="text-center mt-5">
        <h1 className="font-extrabold text-3xl">{room.name}</h1>
        <p className="font-semibold text-xl">Size: {room.room_size}</p>
      </div>
      <div>
        <p className="text-xl font-medium">{room.description}</p>
      </div>
      <div className="card text-center space-y-1">
        <p className="font-bold line-through text-red-700 ">
          Price: ${room.price_per_night}
        </p>
        <p className="font-bold text-base text-green-600">
          Offer Price: ${room.offer_price}
        </p>
        {isRoomBooked ? (
          <p className="text-red-600 text-xl font-semibold">
            Room is already Booked.
          </p>
        ) : (
          <Link to={`/booking/${room._id}`}>
            <button className="btn btn-accent">Book Now</button>
          </Link>
        )}
      </div>

      {review && <ReviewForm roomName={room.name} />}
      <RoomReviews roomName={room.name} />
    </div>
  );
};

export default RoomDetails;
