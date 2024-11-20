import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <div className="grid grid-cols-12">
      <div className="col-span-2">{/* sidebar */}</div>
      <div className="col-span-10 flex items-center justify-center">
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
