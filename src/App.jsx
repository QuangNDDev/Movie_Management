import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MovieManagementPractice from "./pages/movie-management";
import HomePage from "./pages/home";
import Layout from "./components/layout";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
        {
          path: "/movie-management",
          element: <MovieManagementPractice />,
        },
        {
          path: "/home",
          element: <HomePage />,
        },
      ],
    },
  ]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
