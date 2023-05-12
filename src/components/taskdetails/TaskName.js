import classes from './TaskName.module.css';
import { FaCheck } from 'react-icons/fa';

const TaskName = () => {
    return (
      <div className={classes.wrapper}>
        <div className={classes.taskBar}>
          <div className={classes.image}>
            <img
              src="https://cdn-icons-png.flaticon.com/128/2923/2923239.png"
              alt="glass of water"
            />
          </div>
          <p>Drink Water</p>
          <div className={classes.checkBox}>
            <FaCheck className={classes.check} />
          </div>
        </div>
      </div>
    );
}

export default TaskName;