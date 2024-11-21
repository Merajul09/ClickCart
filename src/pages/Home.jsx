import ProductCard from "../components/custom/ProductCard";
import SectionTitle from "../components/custom/SectionTitle";

const Home = () => {
  return (
    <div>
      <h1>This is home</h1>
      <SectionTitle heading={"Featured Products"} />
      <ProductCard product={"product"} title={"ami"} price={22} stock={6} />
    </div>
  );
};

export default Home;
