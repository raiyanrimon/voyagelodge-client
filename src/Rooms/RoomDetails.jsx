import { Link, useLoaderData } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const RoomDetails = () => {
  const room = useLoaderData();
  return (
    <div className="space-y-5">
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
      <div className="card">
        <p className="font-bold line-through text-red-700 ">
          Price: ${room.price_per_night}
        </p>
        <p className="font-bold text-base text-green-600">
          Offer Price: ${room.offer_price}
        </p>
        <Link to={`/booking/${room.name}`}>
          <button className="btn btn-accent">Book Now</button>
        </Link>
      </div>
    </div>
  );
};

export default RoomDetails;
