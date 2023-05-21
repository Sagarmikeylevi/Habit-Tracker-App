import {Link} from 'react-router-dom';
import classes from './TaskCreate.module.css'
const TaskCreate = () => {
    return (
      <div className={classes.wrapper}>
        <div className={classes.header}>
          <h1>Journal</h1>
          <p>Habits change into character</p>
        </div>
        <Link to="create/category">
          <div className={classes.createTask}>
            <span className={classes.plus}>+</span>
            <span className={classes.text}>Add Task</span>
          </div>
        </Link>
      </div>
    );
}

export default TaskCreate;