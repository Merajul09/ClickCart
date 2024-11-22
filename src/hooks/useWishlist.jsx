import { useState, useEffect } from "react";
import axios from "axios";
import useUser from "./useUser";

const useWishlist = () => {
  const [wishlists, setWishlists] = useState([]);
  const [loading, setLoading] = useState(false);
  const userData = useUser();
  const token = localStorage.getItem("access-token");
  useEffect(() => {
    const fetchWishlist = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `http://localhost:5000/wishlist/${userData._id}`,
          {
            headers: {
              authorization: `Bearer ${token}`,
            },
          }
        );
        setWishlists(response.data);
      } catch (error) {
        console.error("Error fetching wishlist:", error);
      } finally {
        setLoading(false);
      }
    };

    if (userData._id && token) {
      fetchWishlist();
    }
  }, [userData._id, token]);

  return { wishlists, loading };
};

export default useWishlist;
