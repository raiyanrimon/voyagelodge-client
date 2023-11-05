import PageTitle from "../Helmet/PageTitle";
import hotel from "../assets/Hotel.webp";
const AboutUs = () => {
  return (
    <div>
      <PageTitle title="About Us | VoyageLodge" />
      <img src={hotel} alt="" />
      <div className="text-center space-y-3">
        <h2 className="text-3xl font-bold">Welcome to VoyageLodge</h2>
        <p className="text-justify">
          At VoyageLodge, we are passionate about making your travel dreams a
          reality. Our mission is to provide you with a seamless and enjoyable
          booking experience, ensuring that you find the perfect accommodations
          for your next adventure.
        </p>
        <h2 className="text-3xl font-bold">Our Story</h2>
        <p className="text-justify">
          VoyageLodge was born out of a shared love for exploration and a
          commitment to exceptional customer service. With years of experience
          in the travel industry, our team understands the unique needs of
          travelers like you. We envisioned a platform that simplifies the
          booking process, offers a wide range of accommodation options, and
          provides the best deals and discounts.
        </p>
      </div>
      <div className="my-5">
        <h2 className="text-3xl font-bold text-center">
          Why Choose VoyageLodge?
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-2 mt-5">
          <div>
            <p className="font-bold text-purple-500">Diverse Selection</p>
          </div>
          <div>
            <p className="font-bold text-orange-400">Seamless Booking</p>
          </div>
          <div>
            <p className="font-bold text-green-500">Exceptional Support</p>
          </div>
          <div>
            <p className="font-bold text-amber-500">Travel Resources</p>
          </div>
          <div>
            <p className="font-bold text-cyan-500">Exclusive Offers</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
