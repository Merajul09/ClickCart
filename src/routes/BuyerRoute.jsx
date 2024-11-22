import { Navigate, useLocation } from "react-router-dom";
import Loader from "../components/Loader";
import useAuth from "../hooks/useAuth";
import useUser from "../hooks/useUser";
import PropTypes from "prop-types";

const BuyerRoute = ({ children }) => {
  const { role } = useUser();
  const { user, loading } = useAuth();
  const location = useLocation();
  if (loading || !role) return <Loader />;
  if (user && role === "buyer") return children;

  return <Navigate to="/login" state={{ from: location }} replace />;
};

export default BuyerRoute;

BuyerRoute.propTypes = {
  children: PropTypes.node,
};
