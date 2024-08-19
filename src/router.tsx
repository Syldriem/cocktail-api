import { createBrowserRouter } from "react-router-dom";
import { App } from "./components";
import { SearchPage } from "./components";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "search",
    element: <SearchPage />,
  },
]);
