import {FaCaretUp, FaCaretDown} from 'react-icons/fa';
import classes from "./CreateTaskForm.module.css";
import Card from '../UI/Card';

const CreateTaskForm = () => {
  return (
    <Card className={classes.wrapper}>
      <div className={classes.header}>
        <h1>Hi There!</h1>
        <p>Create a new habit for yourself</p>
      </div>

      <form>
        <input type="text" placeholder="enter new task" />
        <div className={classes.taskFrequency}>
          <p>1 day</p>
          <span>(in a week)</span>
          <div className={classes.frequencyCounter}>
            <FaCaretUp className={classes.caretUp} />
            <FaCaretDown className={classes.FaCaretDown} />
          </div>
        </div>
        <button type="submit">Add Task</button>
      </form>
    </Card>
  );
};

export default CreateTaskForm;
