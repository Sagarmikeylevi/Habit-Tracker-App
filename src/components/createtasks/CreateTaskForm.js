import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { FaCaretUp, FaCaretDown } from "react-icons/fa";
import { v4 as uuidv4 } from "uuid"; // Import the v4 function from the uuid library
import classes from "./CreateTaskForm.module.css";
import Card from "../UI/Card";
import { addTask } from "../../store/habitSlice";
import { useState } from "react";

const CreateTaskForm = () => {
  // State variables to manage the task title and frequency
  const [taskTitle, setTaskTitle] = useState("");
  const [taskFrequency, setTaskFrequency] = useState(1);

  // Event handler for updating the task title
  const taskTitleHandler = (event) => {
    setTaskTitle(event.target.value);
  };

  // Function to increase the task frequency by 1
  const increaseFrequency = () => {
    setTaskFrequency((prevFreq) => {
      if (prevFreq === 7) return prevFreq;
      return prevFreq + 1;
    });
  };

  // Function to decrease the task frequency by 1
  const decreaseFrequency = () => {
    setTaskFrequency((prevFreq) => {
      if (prevFreq === 1) return prevFreq;
      return prevFreq - 1;
    });
  };

  // Redux dispatch hook to dispatch actions
  const dispatch = useDispatch();

  // React Router hook to access the URL parameters
  const { link } = useParams();

  // Decoding the URL parameter
  const decodedLink = decodeURIComponent(link);

  // React Router hook for navigation
  const navigate = useNavigate();

  // Event handler for adding a new task
  const addTaskHandler = (event) => {
    event.preventDefault();

    // Creating a new task object with the provided information
    const newTask = {
      id: uuidv4(), // Generate a unique ID using uuidv4()
      title: taskTitle,
      categoryURL: decodedLink,
      numOfDays: taskFrequency,
      startingDate: "21-May-2023",
      completedDays: [25, 26, 27, 28],
    };

    // Dispatching an action to add the task to the Redux store
    dispatch(addTask(newTask));

    // Navigating back to the home page
    navigate("/");
  };

  // Displaying the task frequency based on the selected value
  let showFrequency = <p>{`${taskFrequency} day`}</p>;

  if (taskFrequency > 1 && taskFrequency < 7) {
    showFrequency = <p>{`${taskFrequency} days`}</p>;
  }
  if (taskFrequency === 7) {
    showFrequency = <p>{"Everyday"}</p>;
  }

  return (
    <Card className={classes.wrapper}>
      <div className={classes.header}>
        <h1>Hi There!</h1>
        <p>Create a new habit for yourself</p>
      </div>

      <form onSubmit={addTaskHandler}>
        <input
          type="text"
          placeholder="enter new task"
          onChange={taskTitleHandler}
          value={taskTitle}
        />
        <div className={classes.taskFrequency}>
          {showFrequency}
          <div className={classes.frequencyCounter}>
            <FaCaretUp
              className={classes.caretUp}
              onClick={increaseFrequency}
            />
            <FaCaretDown
              className={classes.caretDown}
              onClick={decreaseFrequency}
            />
          </div>
        </div>
        <button type="submit">Add Task</button>
      </form>
    </Card>
  );
};

export default CreateTaskForm;
