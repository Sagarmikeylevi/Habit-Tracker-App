import { useSelector, useDispatch } from "react-redux";
import classes from "./TaskName.module.css";
import { FaCheck, FaTrash } from "react-icons/fa";
import { useState } from "react";
import { removeTask, updateDays } from "../../store/habitSlice";
import { useNavigate } from "react-router-dom";

const TaskName = () => {
  // Retrieve tasks from the Redux store
  const tasks = useSelector((state) => state.habits.tasks);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Manage task completion state using local component state
  const [taskCompletionStates, setTaskCompletionStates] = useState(
    tasks.map(() => false)
  );

  // Toggle the completion state of a task
  const toggleTaskCompletion = (index, id) => {
    setTaskCompletionStates((prevState) => {
      const updatedStates = [...prevState];
      updatedStates[index] = !updatedStates[index];
      return updatedStates;
    });

    const date = new Date().getDate();
    // Dispatch an action to update the completion status of the task in the Redux store
    dispatch(
      updateDays({
        date,
        id,
        isCompleted: !taskCompletionStates[index],
      })
    );
  };

  // Delete a task
  const deleteHandler = (id) => {
    // Dispatch an action to remove the task from the Redux store
    dispatch(removeTask({ id }));
  };

  // Navigate to task details
  const moveToDetailshandler = (id) => {
    navigate(`/task/${id}`);
  };

  return (
    <div className={classes.wrapper}>
      <ul className={classes.taskBarList}>
        {/* Render each task */}
        {tasks.map((task, index) => {
          const isTaskCompleted = taskCompletionStates[index];

          // Determine the CSS classes based on the completion state of the task
          const taskBarCondition = isTaskCompleted
            ? classes.checkedTaskBar
            : classes.uncheckedTaskBar;
          const taskIconCondition = isTaskCompleted
            ? classes.checkedTaskIcon
            : classes.uncheckedTaskIcon;
          const textCondition = isTaskCompleted
            ? classes.checkedText
            : classes.uncheckedText;
          const checkBoxCondition = isTaskCompleted
            ? classes.checkedBox
            : classes.unCheckedBox;
          const isChecked = isTaskCompleted
            ? classes.checked
            : classes.unchecked;

          return (
            <li
              className={`${classes.taskBar} ${taskBarCondition}`}
              key={task.id}
            >
              {/* Render the task icon */}
              <div className={`${classes.taskIcon} ${taskIconCondition}`}>
                <img src={task.categoryURL} alt="category icon" />
              </div>

              {/* Render the task title */}
              <p
                className={textCondition}
                onClick={() => moveToDetailshandler(task.id)}
              >
                {task.title}
              </p>

              {/* Render the delete button */}
              <FaTrash
                className={classes.delete}
                onClick={() => deleteHandler(task.id)}
              />

              {/* Render the task completion checkbox */}
              <div
                className={checkBoxCondition}
                onClick={() => toggleTaskCompletion(index, task.id)}
              >
                <FaCheck className={isChecked} />
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default TaskName;
