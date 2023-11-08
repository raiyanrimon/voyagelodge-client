const UserTestimonial = () => {
  return (
    <div className="carousel w-full my-7">
      <div id="slide1" className="carousel-item relative w-full">
        <div className="max-w-3xl mx-auto space-y-4">
          <p className="text-xl">
            &apos;&apos;I recently booked a stay with VoyageLodge, and it was a
            fantastic experience! From the moment I entered the beautifully
            designed lobby to the time I checked out, I was impressed. The hotel
            staff provided exceptional service and made me feel right at
            home.&apos;&apos;
          </p>
          <div className="flex justify-center">
            <div className="avatar">
              <div className="w-24 rounded-full">
                <img src="https://i.ibb.co/7j0cdvj/photo-1507003211169-0a1dd7228f2d-blend-000000-blend-alpha-10-blend-mode-normal-blend-w-1-crop-faces.jpg" />
              </div>
            </div>
          </div>
          <div className="ml-4 flex justify-center">
            <p className="text-lg font-semibold">Adam Smith</p>
          </div>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide3" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <div className="max-w-3xl mx-auto space-y-4">
          <p className="text-xl">
            &apos;&apos;I had a wonderful experience at VoyageLodge. The hotel
            ambiance is amazing, and the staff is incredibly friendly and
            accommodating. I can not wait to visit again!&apos;&apos;
          </p>
          <div className="flex justify-center">
            <div className="avatar">
              <div className="w-24 rounded-full">
                <img src="https://i.ibb.co/Th0k6DK/photo-1506794778202-cad84cf45f1d-blend-000000-blend-alpha-10-blend-mode-normal-blend-w-1-crop-faces.jpg" />
              </div>
            </div>
          </div>
          <div className="ml-4 flex justify-center">
            <p className="text-lg font-semibold">Peter Parker</p>
          </div>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide1" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <div className="max-w-3xl mx-auto space-y-4">
          <p className="text-xl">
            &apos;&apos;My stay at VoyageLodge was nothing short of perfect. The
            room was comfortable, and the service was outstanding. I highly
            recommend this hotel to anyone looking for a great travel
            experience.&apos;&apos;
          </p>
          <div className="flex justify-center">
            <div className="avatar">
              <div className="w-24 rounded-full">
                <img src="https://i.ibb.co/4SppS8z/photo-1496345875659-11f7dd282d1d-blend-000000-blend-alpha-10-blend-mode-normal-blend-w-1-crop-faces.jpg" />
              </div>
            </div>
          </div>
          <div className="ml-4 flex justify-center">
            <p className="text-lg font-semibold">Tony Joe</p>
          </div>
        </div>

        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide2" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default UserTestimonial;
