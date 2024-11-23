import { useState, useEffect } from "react";
import axios from "axios";
import useUser from "./useUser";
import Swal from "sweetalert2";

const useWishlist = () => {
  const [wishlists, setWishlists] = useState([]);
  const [loading, setLoading] = useState(false);
  const { userData } = useUser();
  const token = localStorage.getItem("access-token");
  useEffect(() => {
    const fetchWishlist = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `https://click-cart-server-pi.vercel.app/wishlist/${userData._id}`,
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
  const handleWishlist = async (id) => {
    await axios
      .patch(`https://click-cart-server-pi.vercel.app/wishlist/add`, {
        userEmail: userData.email,
        productId: id,
      })
      .then((res) => {
        if (res.data.modifiedCount) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Added data to wishlist",
            showConfirmButton: false,
            timer: 2500,
          });
        } else {
          Swal.fire({
            position: "center",
            icon: "warning",
            title: "Already in wishlist",
            showConfirmButton: false,
            timer: 2500,
          });
        }
      });
  };
  const handleRemoveFromWishlist = async (id) => {
    await axios
      .patch(`https://click-cart-server-pi.vercel.app/wishlist/remove`, {
        userEmail: userData.email,
        productId: id,
      })
      .then((res) => {
        if (res.data.modifiedCount) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Remove from wishlist",
            showConfirmButton: false,
            timer: 2500,
          });
          window.location.reload();
        }
      });
  };
  return { wishlists, loading, handleWishlist, handleRemoveFromWishlist };
};

export default useWishlist;
