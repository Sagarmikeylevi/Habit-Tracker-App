import classes from './HabitTracker.module.css';
import SpecificTask from './specificTask/SpecificTask';
// import Task from './tasks/Task';

const HabitTracker = () => {
    return (
        <div className={classes.warpper}>
            {/* <Task /> */}
            <SpecificTask />
        </div>
    )
}

export default HabitTracker;