import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import FooterC from "../components/FooterC";

const MainLayout = () => {
  return (
    <>
      <div>
        <NavBar />
      </div>
      <div className="container mx-auto">
        <Outlet></Outlet>
      </div>
      <div>
        <FooterC />
      </div>
    </>
  );
};

export default MainLayout;
