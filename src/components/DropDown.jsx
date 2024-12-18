import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const DropDown = () => {
  const { user, logOut } = useAuth();
  const handleLogout = () => {
    logOut();
  };
  return (
    <div className="dropdown dropdown-end z-10">
      <div tabIndex={0} role="button">
        <div className="avatar">
          <div className="w-12 rounded-full">
            <img
              src={`${
                user?.photoURL ||
                "https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png"
              }`}
            />
          </div>
        </div>
      </div>
      <ul
        tabIndex={0}
        className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
      >
        <li className="mb-1">
          <Link to="/dashboard">Dashboard</Link>
        </li>
        <li>
          <button
            onClick={handleLogout}
            className="btn btn-sm btn-outline btn-primary"
          >
            Logout
          </button>
        </li>
      </ul>
    </div>
  );
};

export default DropDown;
