import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";

const MainLayout = () => {
  return (
    <>
      <div>
        <NavBar />
      </div>
      <div className="container mx-auto">
        <Outlet></Outlet>
      </div>
      <div>footer</div>
    </>
  );
};

export default MainLayout;
