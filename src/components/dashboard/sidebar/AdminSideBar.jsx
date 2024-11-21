import { Sidebar } from "flowbite-react";
import { HiUsers } from "react-icons/hi";
import { Link } from "react-router-dom";

const AdminSideBar = () => {
  return (
    <>
      <Link to="/dashboard/all-users">
        <Sidebar.Item icon={HiUsers}>All users</Sidebar.Item>
      </Link>
    </>
  );
};

export default AdminSideBar;
