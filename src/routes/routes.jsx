import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home/Home/Home";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";
import Private from "../Pages/Private/Private";
import AddToy from "../Pages/AddToy/AddToy";
import AllToys from "../Pages/AllToys/AllToys";
import Details from "../Pages/shared/Details/Details";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/addToy",
        element: (
          <Private>
            <AddToy />
          </Private>
        ),
      },
      {
        path: "/myToy",
      },
      {
        path: "/alltoys",
        element: (
          <Private>
            <AllToys />
          </Private>
        ),
      },
      {
        path: "/toys/details/:id",
        element: (
          <Private>
            <Details />
          </Private>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/toys/details/${params.id}`),
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);
export default router;
