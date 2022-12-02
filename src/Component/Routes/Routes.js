import { createBrowserRouter } from "react-router-dom";
import Home from "../Home/Home";
import Main from "../Layout/Main";
import Login from "../Login/Login";
import SignUp from "../SignUp/SignUp";
import UserDetails from "../UserDetails/UserDetails";
import UserTasks from "../UserTasks/UserTasks";
import PrivateRoutes from "./PrivateRoutes";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("https://task-server-rabbinur.vercel.app/tasks"),
      },
      {
        path: "/userDetails",
        element: (
          <PrivateRoutes>
            <UserDetails></UserDetails>
          </PrivateRoutes>
        ),
        loader: () => fetch("https://task-server-rabbinur.vercel.app/tasks"),
      },
      {
        path: "/tasks",
        element: (
          <PrivateRoutes>
            <UserTasks></UserTasks>
          </PrivateRoutes>
        ),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
    ],
  },
]);
