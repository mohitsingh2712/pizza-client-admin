import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/login/Login";
import Dashboard from "./layouts/Dashboard";
import NonAuth from "./layouts/NonAuth";
import Root from "./layouts/Root";
import Users from "./pages/users/users";
import Tenants from "./pages/tenants/Tenants";
import Product from "./pages/product/Product";
import Orders from "./pages/orders/Orders";
import SingleOrder from "./pages/orders/SingleOrder";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Dashboard />,
        children: [
          {
            path: "",
            element: <Home />,
          },
          {
            path: "users",
            element: <Users />,
          },
          {
            path: "tenants",
            element: <Tenants />,
          },
          {
            path: "products",
            element: <Product />,
          },
          {
            path: "orders",
            element: <Orders />,
          },
          {
            path: "orders/:orderId",
            element: <SingleOrder />,
          },
        ],
      },
      {
        path: "/auth",
        element: <NonAuth />,
        children: [
          {
            path: "login",
            element: <Login />,
          },
        ],
      },
    ],
  },
]);
