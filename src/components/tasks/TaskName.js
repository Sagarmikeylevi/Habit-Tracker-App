import { useSelector, useDispatch } from "react-redux";
import classes from "./TaskName.module.css";
import { FaCheck, FaTrash } from "react-icons/fa";
import { useState } from "react";
import { removeTask, updateDays } from "../../store/habitSlice";
import { useNavigate } from "react-router-dom";

const TaskName = () => {
  const tasks = useSelector((state) => state.habits.tasks);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [taskCompletionStates, setTaskCompletionStates] = useState(
    tasks.map(() => false)
  );

  const toggleTaskCompletion = (index, id) => {
    setTaskCompletionStates((prevState) => {
      const updatedStates = [...prevState];
      updatedStates[index] = !updatedStates[index];
      return updatedStates;
    });
    const date = new Date().getDate();
    dispatch(
      updateDays({
        date,
        id,
        isCompleted: !taskCompletionStates[index],
      })
    );
  };

  const deleteHandler = (id) => {
    dispatch(removeTask({ id }));
  };

  const moveToDetailshandler = (id) => {
    navigate(`/task/${id}`);
  };

  return (
    <div className={classes.wrapper}>
      <ul className={classes.taskBarList}>
        {tasks.map((task, index) => {
          const isTaskCompleted = taskCompletionStates[index];
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
              <div className={`${classes.taskIcon} ${taskIconCondition}`}>
                <img src={task.categoryURL} alt="category icon" />
              </div>
              <p
                className={textCondition}
                onClick={() => moveToDetailshandler(task.id)}
              >
                {task.title}
              </p>
              <FaTrash
                className={classes.delete}
                onClick={() => deleteHandler(task.id)}
              />
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
