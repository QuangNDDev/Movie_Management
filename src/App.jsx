import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MovieManagementPractice from "./pages/movie-management";
import HomePage from "./pages/home";
import Layout from "./components/layout";
import Login from "./pages/login";

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
        // {
        //   path: "/login",
        //   element: <Login />,
        // },
      ],
    },
    { path: "/login", element: <Login /> },
  ]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
