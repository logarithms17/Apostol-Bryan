import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Team from "./pages/Team";
import TeamDetails from "./pages/TeamDetails";
import AppNavbar from "./components/AppNavbar";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppNavbar />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "team",
        element: <Team />,
      },
      {
        path: "team/:id",
        element: <TeamDetails />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
