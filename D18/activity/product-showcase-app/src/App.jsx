import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppNavbar from "./components/AppNavbar";
import HomePage from "./pages/HomePage";
import ErrorPage from "./pages/ErrorPage";
import ProductsPage from "./pages/ProductsPage";
import ProductDetail from "./components/ProductDetail";
import { loader as productsLoader } from "./pages/ProductsPage";
import { Suspense } from "react";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppNavbar />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "product",
        id: "product",
        element: <ProductsPage />,
        loader: productsLoader,
        children: [
          {
            path: ":id",
            element: <ProductDetail />,
          },
        ],
      },
    ],
  },
]);
function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <RouterProvider router={router} />
    </Suspense>
  );
}

export default App;
