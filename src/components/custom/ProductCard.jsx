import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Card } from "flowbite-react";

const ProductCard = ({
  link,
  id,
  image,
  title,
  price,
  stock,
  description,
  category,
}) => {
  return (
    <div>
      {/* <div className="cursor-pointer rounded-xl bg-white p-3 shadow-lg hover:shadow-xl">
        <Link to={`/${product}/${id}`} className="cursor-pointer group">
          <div className="relative flex items-end overflow-hidden rounded-xl">
            <img
              src={
                image ||
                " https://thumbnails.production.thenounproject.com/gA9eZOvsBYSHrMumgrslmRGoBto=/fit-in/1000x1000/photos.production.thenounproject.com/photos/BCBA88B6-5B41-4B50-A786-E60CAA0ECDA3.jpg"
              }
              alt={title}
              className="object-cover h-full w-full group-hover:scale-110 transition"
            />
          </div>

          <div className="mt-1 p-2">
            <h2 className="text-slate-700">{title}</h2>
            <div className="mt-3 flex items-end justify-between">
              <p>
                <span className="text-lg font-bold text-orange-500">
                  ${price}
                </span>
              </p>

              <div className="group inline-flex">
                <p className="text-lg font-bold text-green-500">{stock}</p>
              </div>
            </div>
          </div>
        </Link>
        <a
          href="#"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Add to cart
        </a>
      </div> */}
      <Link to={`/${link}/${id}`}>
        <Card className="max-w-md cursor-pointer" imgAlt={title} imgSrc={image}>
          <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
            {title}
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            <span className="text-md font-bold text-orange-300">Category:</span>{" "}
            {category}
          </p>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            {description}
          </p>
          <div className="mt-3 flex items-end justify-between">
            <p>
              <span className="text-lg font-bold text-orange-500">
                {price ? "Price: ${price}" : ""}
              </span>
            </p>

            <div className="group inline-flex">
              <p className="text-lg font-bold text-green-500">
                {stock ? "Stocks:" : ""} {stock}
              </p>
            </div>
          </div>
        </Card>
      </Link>
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
  title: PropTypes.string,
  price: PropTypes.number,
  stock: PropTypes.number,
};
export default ProductCard;
