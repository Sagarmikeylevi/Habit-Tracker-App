import classes from './HabitTracker.module.css';
import CreateTaskForm from './createtasks/CreateTaskForm';
// import CategoryList from './createtasks/CategoryList';
// import SpecificTask from './specificTask/SpecificTask';
// import Task from './tasks/Task';

const HabitTracker = () => {
    return (
        <div className={classes.warpper}>
            {/* <Task /> */}
            {/* <SpecificTask /> */}
            {/* <CategoryList /> */}
            <CreateTaskForm />
        </div>
    )
}

export default HabitTracker;