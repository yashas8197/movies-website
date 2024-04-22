import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Body from "./components/Body";
import Movie from "./pages/Movie";
import Report from "./pages/Report";
import MovieDetails from "./pages/MovieDetails";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/movies",
        element: <Movie />,
      },
      {
        path: "/movies/:movieId",
        element: <MovieDetails />,
      },
      {
        path: "/report",
        element: <Report />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
