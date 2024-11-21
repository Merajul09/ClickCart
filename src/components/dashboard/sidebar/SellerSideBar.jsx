import { Sidebar } from "flowbite-react";
import { HiFolderAdd, HiViewList } from "react-icons/hi";
import { Link } from "react-router-dom";
import useUser from "../../../hooks/useUser";

const SellerSideBar = () => {
  const { status } = useUser();
  return (
    <>
      {status === "approved" && (
        <>
          <Link to="/dashboard/add-product">
            <Sidebar.Item icon={HiFolderAdd}>Add product</Sidebar.Item>
          </Link>
          <Link to="/dashboard/listed-product">
            <Sidebar.Item icon={HiViewList}>Listed product</Sidebar.Item>
          </Link>
        </>
      )}
    </>
  );
};

export default SellerSideBar;
