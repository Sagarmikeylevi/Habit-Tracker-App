import { Link } from "react-router-dom";
import classes from "./TaskCreate.module.css";

const TaskCreate = () => {
  return (
    <div className={classes.wrapper}>
      {/* Render the header section */}
      <div className={classes.header}>
        <h1>Journal</h1>
        <p>Habits change into character</p>
      </div>

      {/* Render the link to create a new task */}
      <Link to="create/category">
        <div className={classes.createTask}>
          {/* Render the plus symbol */}
          <span className={classes.plus}>+</span>
          {/* Render the text "Add Task" */}
          <span className={classes.text}>Add Task</span>
        </div>
      </Link>
    </div>
  );
};

export default TaskCreate;
