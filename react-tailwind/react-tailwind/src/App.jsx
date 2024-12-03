import { createBrowserRouter, RouterProvider } from "react-router-dom";

import AdminAuthPage, { action as authAction } from "./pages/LoginPage";
import SharedLayout from "./pages/SharedLayout";
import ErrorPage from "./pages/ErrorPage";
import SeminarPage, { action as seminarAction } from "./pages/SeminarPage";
import ConfirmPage from "./pages/ConfirmPage";
import Dashboard, { loader as dashboardLoader } from "./pages/Dashboard";
import { deleteSeminarAction } from "./components/SeminarsList";

const router = createBrowserRouter([
  {
    path: "/",
    element: <SharedLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <AdminAuthPage />,
        action: authAction,
      },
      {
        path: "dashboard",
        element: <Dashboard />,
        loader: dashboardLoader,
        action: deleteSeminarAction,
        children: [
          {
            path: ":id",
            element: <SeminarPage />,
            action: seminarAction,
          },
        ],
      },
      {
        path: "seminar",
        element: <SeminarPage />,
        action: seminarAction,
      },
      {
        path: "confirm",
        element: <ConfirmPage />,
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
