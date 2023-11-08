import PageTitle from "../Helmet/PageTitle";
import Hero from "./Hero";
import NewsLetter from "./NewsLetter";
import UserTestimonial from "./UserTestimonial";

const Home = () => {
  return (
    <div>
      <PageTitle title="Home | VoyageLodge"></PageTitle>
      <Hero></Hero>
      <NewsLetter></NewsLetter>
      <UserTestimonial></UserTestimonial>
    </div>
  );
};

export default Home;
