import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Category from "../pages/Category";
import TaskForm from "../pages/TaskForm";
import TaskDetails from "../pages/TaskDetails";


// Create the router using createBrowserRouter from react-router-dom
const router = createBrowserRouter([
  {
    path: "/",
    children: [
      // Define the Home component as the default/index route
      { index: true, element: <Home /> },
      {
        path: "create",
        children: [
          // Nested routes under "/create"
          {
            path: "category",
            element: <Category />,
          },
          {
            path: "task-form/:link",
            element: <TaskForm />,
          },
        ],
      },
      // Define the TaskDetails component for the "/task/:id" route
      {
        path: "task/:id",
        element: <TaskDetails />,
      },
    ],
  },
]);

// Create a component called HabitTracker
const HabitTracker = () => {
  // Render the RouterProvider component with the created router
  return <RouterProvider router={router} />;
};

export default HabitTracker;
