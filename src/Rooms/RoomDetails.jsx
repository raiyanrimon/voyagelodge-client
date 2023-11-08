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
  // const accessToken =
  //   "3e6a1bff8aef75d6d150b7fa43832a81c0fbf9bc137c2eacba631a020a3bb73fe5e9ba7074de6464f898363adb6c98bf94205bd8a7f2e0a66f218e2e0dce3ea5";

  // const apiUrl = "http://localhost:5000/bookings";

  // fetch(apiUrl, {
  //   method: "GET",
  //   headers: {
  //     Authorization: `Bearer ${accessToken}`,
  //   },
  // })
  //   .then((response) => {
  //     if (!response.ok) {
  //       throw new Error("Network response was not ok");
  //     }
  //     return response.json();
  //   })
  //   .then((data) => {
  //     // Handle the response data here
  //     console.log(data);
  //     setBookingData(data);
  //   })
  //   .catch((error) => {
  //     // Handle errors, e.g., authentication failure, network issues
  //     console.error("Error:", error);
  //   });

  useEffect(() => {
    fetch("http://localhost:5000/bookings")
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

      {isRoomBooked && <ReviewForm roomName={room.name} />}
      <RoomReviews roomName={room.name} />
    </div>
  );
};

export default RoomDetails;
