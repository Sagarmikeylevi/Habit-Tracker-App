import { Link } from "react-router-dom";
import classes from "./SpecificTaskName.module.css";

const SpecificTaskName = ({ task }) => {
  return (
    <div className={classes.wrapper}>
      {/* Rendering the task title */}
      <Link to="..">
        <h2>{task.title}</h2>
      </Link>

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
