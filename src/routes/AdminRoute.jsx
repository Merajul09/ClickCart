import { Navigate, useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import Loader from "../components/Loader";
import useAuth from "../hooks/useAuth";
import useUser from "../hooks/useUser";

const AdminRoute = ({ children }) => {
  const { userData } = useUser();
  const { user, loading } = useAuth();
  const location = useLocation();

  if (loading || !userData.role) return <Loader />;
  if (user && userData.role === "admin") return children;

  return <Navigate to="/login" state={{ from: location }} replace />;
};

AdminRoute.propTypes = {
  children: PropTypes.element,
};
export default AdminRoute;
