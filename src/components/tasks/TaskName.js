import { useSelector } from "react-redux";
import classes from "./TaskName.module.css";
import { FaCheck, FaTrash } from "react-icons/fa";

const TaskName = () => {
  const tasks = useSelector((state) => state.habits.tasks);

  return (
    <div className={classes.wrapper}>
      <ul className={classes.taskBarList}>
        {tasks.map((task) => {
          return (
            <li
              className={`${classes.taskBar} ${classes.uncheckedTaskBar}`}
              key={task.id}
            >
              <div
                className={`${classes.taskIcon} ${classes.uncheckedTaskIcon}`}
              >
                <img src={task.categoryURL} alt="category icon" />
              </div>
              <p className={classes.uncheckedText}>{task.title}</p>
              <FaTrash className={classes.delete} />
              <div className={classes.unCheckedBox}>
                <FaCheck className={classes.unchecked} />
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default TaskName;
