import { Outlet } from "react-router-dom";
import SideBar from "../components/dashboard/SideBar";

const DashboardLayout = () => {
  return (
    <div className="grid grid-cols-12">
      <div className="col-span-2">
        <SideBar />
      </div>
      <div className="col-span-10 flex items-center justify-center">
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
