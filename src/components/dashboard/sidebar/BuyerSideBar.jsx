import { Sidebar } from "flowbite-react";
import { HiInbox, HiUserAdd } from "react-icons/hi";
import { Link } from "react-router-dom";

const BuyerSideBar = () => {
  return (
    <>
      <Link to="/dashboard/wishlist">
        <Sidebar.Item icon={HiInbox} label="3">
          Wishlist
        </Sidebar.Item>
      </Link>
      <Link to="/dashboard/cart">
        <Sidebar.Item icon={HiUserAdd} label="0">
          Cart
        </Sidebar.Item>
      </Link>
    </>
  );
};

export default BuyerSideBar;
