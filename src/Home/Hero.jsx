import hotelImage from "../assets/hotel.webp";
import mountainImage from "../assets/mountain.webp";
import heroImage from "../assets/hero.webp";
import { Parallax } from "react-parallax";
const Hero = () => {
  return (
    <div className="my-5">
      <Parallax
        className="relative h-screen "
        bgImage={hotelImage}
        strength={800}
      >
        <div className="items-center flex justify-center absolute h-screen w-full">
          <h2 className="font-bold bg-[#7e6e6e] uppercase text-white p-4 lg:text-3xl">
            VoyageLodge - Your Gateway to Unforgettable Stays
          </h2>
          s
        </div>
      </Parallax>

      <Parallax
        className="relative h-screen "
        bgImage={heroImage}
        strength={800}
      >
        <div className="items-center flex justify-center absolute h-screen w-full">
          <h2 className=" font-bold uppercase text-white p-4 lg:text-3xl">
            Discover Comfort, Luxury, and Adventure
          </h2>
        </div>
      </Parallax>
      <Parallax
        className="relative h-screen "
        bgImage={mountainImage}
        strength={800}
      >
        <div className="items-center flex justify-center absolute h-screen w-full">
          <p className=" font-semibold text-center uppercase text-white p-4 text-xs lg:text-xl">
            where your journey begins, Whether you are seeking a relaxing escape
            or an exciting adventure, our exceptional hotels offer the perfect
            stay. Explore our curated destinations, book with ease, and embrace
            unforgettable experiences. Your dream vacation starts here.
          </p>
        </div>
      </Parallax>
    </div>
  );
};

export default Hero;
