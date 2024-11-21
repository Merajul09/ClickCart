import { Navigate, useLocation } from "react-router-dom";
import Loader from "../components/Loader";
import useAuth from "../hooks/useAuth";
import useUser from "../hooks/useUser";
import PropTypes from "prop-types";

const SellerRoute = ({ children }) => {
  const { role } = useUser();
  const { user, loading } = useAuth();
  const location = useLocation();

  if (loading || !role) return <Loader />;
  if (user && role === "seller") return children;

  return <Navigate to="/login" state={{ from: location }} replace />;
};
SellerRoute.propTypes = {
  children: PropTypes.node,
};
export default SellerRoute;