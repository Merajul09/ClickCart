import { Sidebar } from "flowbite-react";
import { HiChartPie, HiUser, HiHome, HiLogout } from "react-icons/hi";
import { Link } from "react-router-dom";
import useUser from "../../hooks/useUser";
import BuyerSideBar from "./sidebar/BuyerSideBar";
import SellerSideBar from "./sidebar/SellerSideBar";
import AdminSideBar from "./sidebar/AdminSideBar";
import useAuth from "../../hooks/useAuth";
const SideBar = () => {
  const { role } = useUser();
  const { logOut } = useAuth();
  const handleLogout = () => {
    logOut();
  };
  return (
    <Sidebar className="min-h-screen ">
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          <Link to="/dashboard" className="flex items-center ps-2.5 mb-5">
            <img src="./cart.png" className="h-6 me-3 sm:h-7" alt="ClickCart" />
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
              ClickCart
            </span>
          </Link>
          <Link to="/dashboard">
            <Sidebar.Item icon={HiChartPie}>Overview</Sidebar.Item>
          </Link>
          {role === "buyer" && <BuyerSideBar />}
          {role === "seller" && <SellerSideBar />}
          {role === "admin" && <AdminSideBar />}
        </Sidebar.ItemGroup>
      </Sidebar.Items>
      <Sidebar.Items className="flex flex-col justify-end h-[60vh] fixed bottom-3 left-3">
        <Sidebar.ItemGroup>
          <Link to="/dashboard/profile">
            <Sidebar.Item icon={HiUser}>Profile</Sidebar.Item>
          </Link>
          <Sidebar.Item href="/" icon={HiHome}>
            Home
          </Sidebar.Item>
          <span onClick={handleLogout}>
            <Sidebar.Item href="/" icon={HiLogout}>
              Logout
            </Sidebar.Item>
          </span>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
};

export default SideBar;
