import { createBrowserRouter, RouterProvider } from "react-router";
import "./App.css";
import MainLayout from "./Components/MainLayout";
import Home from "./Components/Home";
import Favorites from "./Components/Favorites";

function App() {

  
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "home",
          element: <Home />,
        },
        {
          path: "favorites",
          element: <Favorites />,
        },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={routes} />
    </>
  );
}

export default App;
