import { Sidebar } from "flowbite-react";
import {
  HiChartPie,
  HiInbox,
  HiUser,
  HiShoppingBag,
  HiHome,
  HiLogout,
  HiUserAdd,
} from "react-icons/hi";
import { Link } from "react-router-dom";
const SideBar = () => {
  return (
    <Sidebar className="min-h-screen ">
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          <Link to="/dashboard/overview">
            <Sidebar.Item icon={HiChartPie}>Overview</Sidebar.Item>
          </Link>
          <Sidebar.Item href="#" icon={HiInbox} label="3">
            Wishlist
          </Sidebar.Item>
          <Link to="/dashboard/add-product">
            <Sidebar.Item icon={HiUserAdd}>Add Product</Sidebar.Item>
          </Link>
          <Sidebar.Item href="#" icon={HiShoppingBag}>
            Products
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
      <Sidebar.Items className="flex flex-col justify-end h-[60vh]">
        <Sidebar.ItemGroup>
          <Link to="/dashboard/profile">
            <Sidebar.Item icon={HiUser}>Profile</Sidebar.Item>
          </Link>
          <Sidebar.Item href="/" icon={HiHome}>
            Home
          </Sidebar.Item>
          <Sidebar.Item href="/" icon={HiLogout}>
            Logout
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
};

export default SideBar;
