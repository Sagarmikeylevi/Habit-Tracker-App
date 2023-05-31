import classes from "./TaskName.module.css";
import { FaCheck, FaTrash } from "react-icons/fa";
import { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";
import { firestore } from "../HabitTracker";
import { collection, deleteDoc, getDocs, updateDoc } from "firebase/firestore";

const TaskName = () => {
  const navigate = useNavigate();

  const [taskList, setTaskList] = useState([]); // State to hold the taskList data

  const [taskCompletionStates, setTaskCompletionStates] = useState(
    Array(taskList.length).fill(false)
  );

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const data = collection(firestore, "tasks");
        const tasksSnapshot = await getDocs(data);
        const taskList = tasksSnapshot.docs.map((doc) => doc.data());
        // Set the taskList in component state
        setTaskList(taskList);
      } catch (error) {
        console.log("Error in fetching the data", error);
      }
    };

    fetchTasks();
  }, [setTaskCompletionStates]);

  const toggleTaskCompletion = async (index, id) => {
    setTaskCompletionStates((prevState) => {
      const updatedStates = [...prevState];
      updatedStates[index] = !updatedStates[index];
      return updatedStates;
    });

    // Determine whether to add or remove the date from completedDays
    const date = new Date().getDate();
    const isCompleted = !taskCompletionStates[index];

    const task = taskList.find((task) => task.id === id);
    // console.log(task);
    const completedDays = task.completedDays || []; // Get the existing completedDays array or initialize it if it doesn't exist

    if (isCompleted) {
      if (!completedDays.includes(date)) {
        completedDays.push(date); // Add the date to completedDays if it is not already present
      }
    } else {
      const dateIndex = completedDays.indexOf(date);
      if (dateIndex !== -1) {
        completedDays.splice(dateIndex, 1); // Remove the date from completedDays
      }
    }

    // console.log(task);

    //Update the completedDays field in Firestore
    const taskDocRef = collection(firestore, "tasks");
    const snapshot = await getDocs(taskDocRef);
    const taskRef = snapshot.docs.find((doc) => doc.data().id === id)?.ref;
    await updateDoc(taskRef, { completedDays });
  };

  const deleteHandler = async (id) => {
    const updatedTaskList = [...taskList];
    const index = updatedTaskList.findIndex((task) => task.id === id);
    updatedTaskList.splice(index, 1);
    setTaskList(updatedTaskList);

    const taskDocRef = collection(firestore, "tasks");
    const snapshot = await getDocs(taskDocRef);
    const taskRef = snapshot.docs.find((doc) => doc.data().id === id)?.ref;
    await deleteDoc(taskRef);
  };

  const moveToDetailshandler = (id) => {
    navigate(`/task/${id}`);
  };

  return (
    <div className={classes.wrapper}>
      <ul className={classes.taskBarList}>
        {taskList.map((task, index) => {
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
