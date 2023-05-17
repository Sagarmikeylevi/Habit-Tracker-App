import classes from './TaskStreak.module.css';
import { FaFire, FaBolt } from 'react-icons/fa'

const TaskStreak = () => {
    return (
      <div className={classes.wrapper}>
        <div className={classes.streak}>
          <h3>This streak</h3>
          <div className={classes.currentStreak}>
            <FaFire className={classes.currentStreakIcon} />
            <p>7 days</p>
          </div>
        </div>

        <div className={classes.streak}>
          <p>Longest streak</p>
          <div className={classes.longestStreak}>
            <FaBolt className={classes.longestStreakIcon} />
            <p>14 days</p>
          </div>
        </div>
      </div>
    );
}

export default TaskStreak;