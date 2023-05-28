import { useSelector } from 'react-redux';
import classes from './SpecificTaskName.module.css';
import { useParams } from 'react-router-dom';

const SpecificTaskName = () => {
    const tasks = useSelector((state) => state.habits.tasks);

    const { id } = useParams();
    const task = tasks.find((task) => task.id === id);
    return (
      <div className={classes.wrapper}>
        <h2>{task.title}</h2>
        <p>{task.numOfDays === 7 ? "Everyday" : task.numOfDays > 1 ? `${task.numOfDays} days`: "1 day"}
        </p>
      </div>
    );
}

export default SpecificTaskName;