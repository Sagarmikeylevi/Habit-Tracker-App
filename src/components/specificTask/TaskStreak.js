import classes from "./TaskStreak.module.css";
import { FaFire, FaBolt } from "react-icons/fa";

const TaskStreak = (props) => {
  return (
    <div className={classes.wrapper}>
      {/* Render the current streak */}
      <div className={classes.streak}>
        <h3>This streak</h3>
        <div className={classes.currentStreak}>
          {/* Render the fire icon */}
          <FaFire className={classes.currentStreakIcon} />
          {/* Render the current streak count */}
          <p>{props.streakCount}</p>
        </div>
      </div>

      {/* Render the longest streak */}
      <div className={classes.streak}>
        <p>Longest streak</p>
        <div className={classes.longestStreak}>
          {/* Render the bolt icon */}
          <FaBolt className={classes.longestStreakIcon} />
          {/* Render the longest streak count */}
          <p>{props.longestStreak}</p>
        </div>
      </div>
    </div>
  );
};

export default TaskStreak;
