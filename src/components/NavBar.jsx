import { Link, NavLink } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import DropDown from "./DropDown";
import { HiOutlineHeart, HiOutlineShoppingCart } from "react-icons/hi";
import useUser from "../hooks/useUser";

const NavBar = () => {
  const { user } = useAuth();
  const { userData } = useUser();
  const links = (
    <div className="space-x-4">
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? "btn btn-sm btn-primary" : "btn btn-sm"
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/about"
        className={({ isActive }) =>
          isActive ? "btn btn-sm btn-primary" : "btn btn-sm"
        }
      >
        About
      </NavLink>
      <NavLink
        to="/products"
        className={({ isActive }) =>
          isActive ? "btn btn-sm btn-primary" : "btn btn-sm"
        }
      >
        Products
      </NavLink>
      <NavLink
        to="/contact"
        className={({ isActive }) =>
          isActive ? "btn btn-sm btn-primary" : "btn btn-sm"
        }
      >
        Contact us
      </NavLink>
    </div>
  );
  return (
    <div className="navbar bg-base-300 px-10">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <a href="/" className="btn btn-md btn-ghost text-xl bg-gray-300">
          Click cart
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      {user ? (
        <div className="navbar-end gap-3">
          {userData ? `Logged in as ${userData.role}` : ""}
          {userData.role === "buyer" && (
            <>
              <div className="flex">
                <a href="/dashboard/wishlist" className="flex">
                  <HiOutlineHeart className="w-6 h-6" />
                </a>
              </div>
              <HiOutlineShoppingCart className="w-6 h-6" />
            </>
          )}
          <DropDown />
        </div>
      ) : (
        <div className="navbar-end gap-3">
          <Link to="/login" className="btn btn-outline btn-primary">
            Login
          </Link>
          <Link to="/register" className="btn btn-outline btn-accent">
            Register
          </Link>
        </div>
      )}
    </div>
  );
};

export default NavBar;
