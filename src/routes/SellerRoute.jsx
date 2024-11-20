import { Navigate } from "react-router-dom";
import Loader from "../components/Loader";
import useAuth from "../hooks/useAuth";
import useUser from "../hooks/useUser";
import PropTypes from "prop-types";

const SellerRoute = ({ children }) => {
  const { role } = useUser();
  const { loading } = useAuth();

  if (loading) return <Loader />;
  if (role.toLowerCase() === "admin") return children;

  return <Navigate to="/dashboard" />;
};
SellerRoute.propTypes = {
  children: PropTypes.element,
};
export default SellerRoute;
