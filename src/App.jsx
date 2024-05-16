import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MovieManagementPractice from "./pages/movie-management";
import HomePage from "./pages/home";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/home",
      element: <HomePage />,
    },
    {
      path: "/movie-management",
      element: <MovieManagementPractice />,
    },
  ]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
