import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/layout/Layout";
import Home from "../page/home/Home";
import About from "../page/about/About";
import Cart from "../page/cart/Cart";
import Error from "../page/404/Error";
import SingleCart from "../components/singleProduct/SingleCart";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      { path: "cart", element: <Cart /> },
      { path: "/:id", element: <SingleCart /> },
    ],
  },
  {
    path: "*",
    element: <Error />,
  },
]);

export default router;
