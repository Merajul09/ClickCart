import { Sidebar } from "flowbite-react";
import { HiOutlineHeart, HiOutlineShoppingCart } from "react-icons/hi";
import { Link } from "react-router-dom";
import useWishlist from "../../../hooks/useWishlist";

const BuyerSideBar = () => {
  const { wishlists } = useWishlist();
  return (
    <>
      <Link to="/dashboard/wishlist">
        <Sidebar.Item icon={HiOutlineHeart} label={wishlists.length}>
          Wishlist
        </Sidebar.Item>
      </Link>
      <Link to="/dashboard/cart">
        <Sidebar.Item icon={HiOutlineShoppingCart} label="0">
          Cart
        </Sidebar.Item>
      </Link>
    </>
  );
};

export default BuyerSideBar;
