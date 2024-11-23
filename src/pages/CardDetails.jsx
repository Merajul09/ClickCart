import { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Card } from "flowbite-react";

const CardDetails = () => {
  const [productData, setProductData] = useState({});
  const { id } = useParams();
  const { loading } = useAuth();
  useEffect(() => {
    const fetchProductData = async () => {
      const res = await axios.get(
        `https://click-cart-server-pi.vercel.app/product/${id}`
      );
      setProductData(res.data);
      console.log(res.data);
    };
    if (!loading) {
      fetchProductData();
    }
  }, [loading, id]);
  const { title, imageURL, brand, category, description, price, stock } =
    productData;
  console.log(productData);
  return (
    <>
      <Card
        className="max-w-2xl cursor-pointer mx-auto my-4"
        imgAlt={title}
        imgSrc={imageURL}
        horizontal
      >
        <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
          {title}
        </h5>
        <div className="flex justify-between">
          <p className="font-normal text-gray-700 dark:text-gray-400">
            <span className="text-md font-bold text-orange-300">
              Category:{" "}
            </span>
            {category}
          </p>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            {brand}
            <span className="text-md font-bold text-orange-300"> :Brand</span>
          </p>
        </div>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          {description}
        </p>
        <div className="mt-3 flex items-end justify-between">
          <p>
            <span className="text-lg font-bold text-orange-500">
              Price: ${price}
            </span>
          </p>

          <div className="group inline-flex">
            <p className="text-lg font-bold text-green-500">
              {stock ? "Stocks:" : ""} {stock}
            </p>
          </div>
        </div>
      </Card>
    </>
  );
};

export default CardDetails;
