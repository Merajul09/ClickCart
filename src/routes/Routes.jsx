import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import ErrorPage from "../components/ErrorPage";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Login from "../pages/Login";
import Register from "../pages/Register";
import DashboardLayout from "../layouts/DashboardLayout";
import Profile from "../components/dashboard/Profile";
import PrivateRoute from "./private/PrivateRoute";
import AdminRoute from "./AdminRoute";
import SellerRoute from "./SellerRoute";
import AddProduct from "../components/dashboard/AddProduct";
import ListedProduct from "../components/dashboard/ListedProduct";
import AllUsers from "../components/dashboard/AllUsers";
import Cart from "../components/dashboard/Cart";
import Wishlist from "../components/dashboard/Wishlist";
import Overview from "../components/dashboard/Overview";
import BuyerRoute from "./BuyerRoute";
import Products from "../pages/Products";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>
    ),
    children: [
      {
        path: "/dashboard",
        element: <Overview />,
      },
      {
        path: "/dashboard/profile",
        element: <Profile />,
      },
      {
        path: "/dashboard/wishlist",
        element: (
          <BuyerRoute>
            <Wishlist />
          </BuyerRoute>
        ),
      },
      {
        path: "/dashboard/cart",
        element: (
          <BuyerRoute>
            <Cart />
          </BuyerRoute>
        ),
      },
      {
        path: "/dashboard/add-product",
        element: <AddProduct />,
      },
      {
        path: "/dashboard/listed-product",
        element: (
          <SellerRoute>
            <ListedProduct />
          </SellerRoute>
        ),
      },
      {
        path: "/dashboard/all-users",
        element: (
          <AdminRoute>
            <AllUsers />
          </AdminRoute>
        ),
      },
    ],
  },
]);
