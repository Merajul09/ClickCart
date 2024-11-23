import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Card } from "flowbite-react";
import useWishlist from "../../hooks/useWishlist";
import useUser from "../../hooks/useUser";

const ProductCard = ({
  link,
  id,
  image,
  title,
  price,
  stock,
  description,
  category,
  brand,
}) => {
  const { handleWishlist } = useWishlist();
  const { userData } = useUser();
  return (
    <div>
      <Card className="max-w-md" imgAlt={title} imgSrc={image}>
        <Link to={`/${link}/${id}`}>
          <div className="cursor-pointer">
            <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
              {title}
            </h5>
            {brand ? (
              <p className="font-normal text-gray-700 dark:text-gray-400">
                <span className="text-md font-bold text-orange-300">
                  {brand ? "Brand:" : ""}
                </span>{" "}
                {brand}
              </p>
            ) : (
              <p className="font-normal text-gray-700 dark:text-gray-400">
                <span className="text-md font-bold text-orange-300">
                  Category:
                </span>{" "}
                {category}
              </p>
            )}
            <p className="font-normal text-gray-700 dark:text-gray-400">
              {description}
            </p>
            <div className="mt-3 flex items-end justify-between">
              <p>
                <span className="text-lg font-bold text-orange-500">
                  {price ? "Price:" : ""} {price}
                </span>
              </p>

              <div className="group inline-flex">
                <p className="text-lg font-bold text-green-500">
                  {stock ? "Stocks:" : ""} {stock}
                </p>
              </div>
            </div>
          </div>
        </Link>
        {userData.role === "buyer" && (
          <button
            onClick={() => handleWishlist(id)}
            className="btn btn-primary btn-outline "
          >
            Add to wishlist
          </button>
        )}
      </Card>
    </div>
  );
};
ProductCard.propTypes = {
  product: PropTypes.string,
  id: PropTypes.string,
  link: PropTypes.string,
  image: PropTypes.string,
  description: PropTypes.string,
  category: PropTypes.string,
  brand: PropTypes.string,
  title: PropTypes.string,
  price: PropTypes.number,
  stock: PropTypes.number,
};
export default ProductCard;
