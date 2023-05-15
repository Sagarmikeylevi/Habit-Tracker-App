import classes from "./TaskName.module.css";
import { FaCheck } from "react-icons/fa";

const TaskName = () => {
  return (
    <div className={classes.wrapper}>
      <ul className={classes.taskBarList}>
        <li className={`${classes.taskBar} ${classes.checkedTaskBar}`}>
          <div className={`${classes.taskIcon} ${classes.checkedTaskIcon}`}>
            <img
              src="https://cdn-icons-png.flaticon.com/128/2923/2923239.png"
              alt="glass of water"
            />
          </div>
          <p className={classes.checkedText}>Drink Water</p>
          <div className={classes.checkedBox}>
            <FaCheck className={classes.checked} />
          </div>
        </li>

        <li className={`${classes.taskBar} ${classes.uncheckedTaskBar}`}>
          <div className={`${classes.taskIcon} ${classes.uncheckedTaskIcon}`}>
            <img
              src="https://cdn-icons-png.flaticon.com/128/2923/2923239.png"
              alt="glass of water"
            />
          </div>
          <p className={classes.uncheckedText}>Drink Water</p>
          <div className={classes.unCheckedBox}>
            <FaCheck className={classes.unchecked} />
          </div>
        </li>
      </ul>
    </div>
  );
};

export default TaskName;
