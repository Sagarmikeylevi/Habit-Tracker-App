import classes from './Task.module.css';
import TaskCreate from './TaskCreate';
import TaskDate from './TaskDate';
import TaskName from './TaskName';

const Task = () => {
    return (
        <div className={classes.wrapper}>
            <TaskCreate />
            <TaskDate />
            <TaskName />
        </div>
    )
}

export default Task;