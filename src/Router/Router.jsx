import * as React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import MainPage from "../Pages/MainPage/MainPage";
import SingleContactPage from "../Pages/SingleContactPage/SingleContactPage";
import ErrorPage from "../Pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
  },
  {
    path: "/:id",
    element: <SingleContactPage />,
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
]);

const Router = () => {
  return <RouterProvider router={router} />;
};

export default Router;
