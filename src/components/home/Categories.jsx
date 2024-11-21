import { Link } from "react-router-dom";
import useProductData from "../../hooks/useProductData";
import ProductCard from "../custom/ProductCard";
import SectionTitle from "../custom/SectionTitle";
import useAuth from "../../hooks/useAuth";
import Loader from "../Loader";

const Categories = () => {
  const { categories, products } = useProductData();
  const { loading } = useAuth();
  console.log(categories, products);
  return (
    <div>
      <SectionTitle subHeading={"our category lists"} heading={"categories"} />

      {loading || products === undefined ? (
        <Loader />
      ) : (
        <>
          {products.length === 0 ? (
            <div className="w-full h-full flex justify-center items-center">
              <h1>No Products Found</h1>
            </div>
          ) : (
            <div className="grid grid-cols-3 gap-2">
              {products.slice(3).map((product, idx) => (
                <ProductCard
                  key={idx}
                  image={product.imageURL}
                  title={product.title}
                  id={product._id}
                  description={product.description}
                  category={product.category}
                  link={"product"}
                />
              ))}
            </div>
          )}
        </>
      )}
      <div className="flex justify-center my-3">
        <Link to="/products">
          {" "}
          <button className="px-1 md:px-4 py-3 text-sm font-medium tracking-wider text-gray-100 uppercase transition-colors duration-300 transform bg-primary rounded-md hover:bg-gray-600 focus:bg-gray-600 focus:outline-none">
            See All
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Categories;
