import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import Home from "../pages/Home";
import Category from "../pages/Category";
import TaskForm from "../pages/TaskForm";
import TaskDetails from "../pages/TaskDetails";
import ErrorPage from "../pages/ErrorPage";

// web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);

// Create the router using createBrowserRouter from react-router-dom
const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage />,
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
