import PageTitle from "../Helmet/PageTitle";
import Hero from "./Hero";
import NewsLetter from "./NewsLetter";

const Home = () => {
  return (
    <div>
      <PageTitle title="Home | VoyageLodge"></PageTitle>
      <Hero></Hero>
      <NewsLetter></NewsLetter>
    </div>
  );
};

export default Home;
