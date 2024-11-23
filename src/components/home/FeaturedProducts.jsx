import useAuth from "../../hooks/useAuth";
import useProductData from "../../hooks/useProductData";
import ProductCard from "../custom/ProductCard";
import SectionTitle from "../custom/SectionTitle";
import Loader from "../Loader";

const FeaturedProducts = () => {
  const { products } = useProductData();
  const { loading } = useAuth();
  return (
    <div>
      <SectionTitle subHeading={"our product lists"} heading={"Products"} />
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
              {products.slice(0, 3).map((product, idx) => (
                <ProductCard
                  key={idx}
                  image={product.imageURL}
                  title={product.title}
                  id={product._id}
                  price={product.price}
                  stock={product.stock}
                  description={product.description}
                  brand={product.brand}
                  category={product.category}
                  link={"product"}
                />
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default FeaturedProducts;
