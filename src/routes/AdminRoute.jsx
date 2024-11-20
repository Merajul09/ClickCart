import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";
import Loader from "../components/Loader";
import useAuth from "../hooks/useAuth";
import useUser from "../hooks/useUser";

const AdminRoute = ({ children }) => {
  const { role } = useUser();
  const { loading } = useAuth();

  if (loading) return <Loader />;
  if (role.toLowerCase() === "admin") return children;

  return <Navigate to="/dashboard" />;
};

AdminRoute.propTypes = {
  children: PropTypes.element,
};
export default AdminRoute;
