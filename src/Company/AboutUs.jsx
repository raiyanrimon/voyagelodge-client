import PageTitle from "../Helmet/PageTitle";
import hotel from "../assets/Hotel2.webp";

const AboutUs = () => {
  return (
    <div className="container mx-auto">
      <PageTitle title="About Us | VoyageLodge" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <img src={hotel} alt="Hotel" className="md:rounded-lg" />
        <div className="text-center space-y-3">
          <h2 className="text-3xl font-bold text-primary">
            Welcome to VoyageLodge
          </h2>
          <p className="text-lg text-gray-700">
            At VoyageLodge, we are passionate about making your travel dreams a
            reality. Our mission is to provide you with a seamless and enjoyable
            booking experience, ensuring that you find the perfect
            accommodations for your next adventure.
          </p>
          <h2 className="text-3xl font-bold text-emerald-400">Our Story</h2>
          <p className="text-lg text-gray-700">
            VoyageLodge was born out of a shared love for exploration and a
            commitment to exceptional customer service. With years of experience
            in the travel industry, our team understands the unique needs of
            travelers like you. We envisioned a platform that simplifies the
            booking process, offers a wide range of accommodation options, and
            provides the best deals and discounts.
          </p>
        </div>
      </div>
      <div className="my-10">
        <h2 className="text-3xl font-bold text-center text-secondary">
          Why Choose VoyageLodge?
        </h2>
        <div className="flex flex-wrap gap-5 mt-5 mx-auto max-w-4xl">
          <div className="flex flex-col items-center">
            <p className="font-bold text-purple-500">Diverse Selection</p>
          </div>
          <div className="flex flex-col items-center">
            <p className="font-bold text-orange-400">Seamless Booking</p>
          </div>
          <div className="flex flex-col items-center">
            <p className="font-bold text-green-500">Exceptional Support</p>
          </div>
          <div className="flex flex-col items-center">
            <p className="font-bold text-amber-500">Travel Resources</p>
          </div>
          <div className="flex flex-col items-center">
            <p className="font-bold text-cyan-500">Exclusive Offers</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
