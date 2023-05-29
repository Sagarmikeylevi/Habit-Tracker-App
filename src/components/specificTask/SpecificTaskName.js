import { useSelector } from "react-redux";
import classes from "./SpecificTaskName.module.css";
import { useParams } from "react-router-dom";

const SpecificTaskName = () => {
  // Accessing the tasks from the Redux store using the useSelector hook
  const tasks = useSelector((state) => state.habits.tasks);

  // Accessing the 'id' parameter from the URL using the useParams hook
  const { id } = useParams();

  // Finding the task with the matching id
  const task = tasks.find((task) => task.id === id);

  return (
    <div className={classes.wrapper}>
      {/* Rendering the task title */}
      <h2>{task.title}</h2>

      {/* Rendering the task frequency based on the number of days */}
      <p>
        {task.numOfDays === 7
          ? "Everyday"
          : task.numOfDays > 1
          ? `${task.numOfDays} days`
          : "1 day"}
      </p>
    </div>
  );
};

export default SpecificTaskName;
