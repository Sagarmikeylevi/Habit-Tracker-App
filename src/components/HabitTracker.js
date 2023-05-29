import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Category from "../pages/Category";
import TaskForm from "../pages/TaskForm";
import TaskDetails from "../pages/TaskDetails";
import { initializeApp } from "firebase/app";
// import { getFirestore } from "firebase/firestore";

// web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAw2J99mp2vbRY0NXZLlSyjiRwMVhq-U4g",
  authDomain: "habit-tracker-c0c92.firebaseapp.com",
  projectId: "habit-tracker-c0c92",
  storageBucket: "habit-tracker-c0c92.appspot.com",
  messagingSenderId: "300304445526",
  appId: "1:300304445526:web:e3d041e113df7592268bf7",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const firestore = getFirestore(app);


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
  return <RouterProvider router={router}  />;
};

export default HabitTracker;
