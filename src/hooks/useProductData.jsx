import axios from "axios";
import { useEffect, useState } from "react";
import useAuth from "./useAuth";

const useProductData = () => {
  const [productData, setProductData] = useState({});
  const { loading } = useAuth();
  useEffect(() => {
    const fetchProductData = async () => {
      const res = await axios.get(`http://localhost:5000/all-products`);
      setProductData(res.data);
    };
    if (!loading) {
      fetchProductData();
    }
  }, [loading]);

  return productData;
};

export default useProductData;
