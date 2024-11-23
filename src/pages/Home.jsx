import Categories from "../components/home/Categories";
import Faq from "../components/home/Faq";
import FeaturedProducts from "../components/home/FeaturedProducts";
import GetInTouch from "../components/home/GetInTouch";
import Hero from "../components/home/Hero";
import Review from "../components/home/Review";

const Home = () => {
  return (
    <div>
      <Hero />
      <FeaturedProducts />
      <Categories />
      <Review />
      <Faq />
      <GetInTouch />
    </div>
  );
};

export default Home;
