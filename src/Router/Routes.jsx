import { createBrowserRouter } from "react-router-dom";
import Root from "../Layouts/Root";
import Login from "../Login";
import Home from "../Pages/Home/Home";
import Register from "../Register";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);

export default Routes;
