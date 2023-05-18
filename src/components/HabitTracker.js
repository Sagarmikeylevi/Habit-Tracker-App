import classes from './HabitTracker.module.css';
import CategoryList from './createtasks/CategoryList';
// import SpecificTask from './specificTask/SpecificTask';
// import Task from './tasks/Task';

const HabitTracker = () => {
    return (
        <div className={classes.warpper}>
            {/* <Task /> */}
            {/* <SpecificTask /> */}
            <CategoryList />
        </div>
    )
}

export default HabitTracker;