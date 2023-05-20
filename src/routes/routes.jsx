import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home/Home/Home";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";
import Private from "../Pages/Private/Private";
import AddToy from "../Pages/AddToy/AddToy";
import AllToys from "../Pages/AllToys/AllToys";
import Details from "../Pages/shared/Details/Details";
import MyToys from "../Pages/MyToys/MyToys";
import ErrorNotFound from "../Pages/Errors/ErrorNotFound";
import Blog from "../Pages/Blog/Blog";

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
        element: <AllToys />,
      },
      {
        path: "/toys/details/:id",
        element: (
          <Private>
            <Details />
          </Private>
        ),
        loader: ({ params }) =>
          fetch(`https://b7-a11.vercel.app/toys/details/${params.id}`),
      },
      {
        path: "/mytoys",
        element: (
          <Private>
            <MyToys />
          </Private>
        ),
      },
      {
        path: "/blog",
        element: <Blog />,
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
  {
    path: "*",
    element: <ErrorNotFound />,
  },
]);
export default router;
