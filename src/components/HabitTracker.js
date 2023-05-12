import classes from './HabitTracker.module.css';
import Task from './taskdetails/Task';

const HabitTracker = () => {
    return (
        <div className={classes.warpper}>
            <Task />
        </div>
    )
}

export default HabitTracker;