import PageTitle from "../Helmet/PageTitle";
import Banner from "./Banner";
import FeaturedRooms from "./FeaturedRooms";
import Hero from "./Hero";
import NewsLetter from "./NewsLetter";
import UserTestimonial from "./UserTestimonial";

const Home = () => {
  return (
    <div className="space-y-7">
      <PageTitle title="Home | VoyageLodge"></PageTitle>
      <Hero></Hero>
      <Banner></Banner>
      <FeaturedRooms></FeaturedRooms>
      <NewsLetter></NewsLetter>
      <UserTestimonial></UserTestimonial>
    </div>
  );
};

export default Home;
