import Loading from "../UI/Loading"; // Import the Loading component
import classes from "./TaskName.module.css"; // Import CSS module styles
import { FaCheck, FaTrash } from "react-icons/fa"; // Import icons from react-icons library
import { useEffect, useState } from "react"; // Import necessary hooks from React
import { useNavigate } from "react-router-dom"; // Import useNavigate hook from react-router-dom
import { firestore } from "../HabitTracker"; // Import the firestore instance from HabitTracker module
import { collection, deleteDoc, getDocs, updateDoc } from "firebase/firestore"; // Import Firestore functions

const TaskName = () => {
  const navigate = useNavigate(); // Initialize the useNavigate hook

  const [taskList, setTaskList] = useState(null); // Initialize state variable for taskList
  const [taskCompletionStates, setTaskCompletionStates] = useState([]); // Initialize state variable for taskCompletionStates

  const date = new Date().getDate(); // Get the current date

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const data = collection(firestore, "tasks"); // Get the collection reference to "tasks"
        const tasksSnapshot = await getDocs(data); // Fetch the tasks documents
        const taskList = tasksSnapshot.docs.map((doc) => doc.data()); // Extract the data from documents
        // Set the taskList in component state
        setTaskList(taskList);
      } catch (error) {
        console.log("Error in fetching the data", error);
      }
    };

    fetchTasks();
  }, []);

  if (!taskList) {
    return <Loading />; // If taskList is null, render the Loading component
  }

  const toggleTaskCompletion = async (index, id) => {
    setTaskCompletionStates((prevState) => {
      const updatedStates = [...prevState];
      updatedStates[index] = !updatedStates[index];
      return updatedStates;
    });

    // Determine whether to add or remove the date from completedDays

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
    const taskDocRef = collection(firestore, "tasks"); // Get the collection reference to "tasks"
    const snapshot = await getDocs(taskDocRef); // Fetch the tasks documents
    const taskRef = snapshot.docs.find((doc) => doc.data().id === id)?.ref; // Find the document reference with matching id
    await updateDoc(taskRef, { completedDays }); // Update the completedDays field in the document
  };

  const deleteHandler = async (id) => {
    const updatedTaskList = [...taskList];
    const index = updatedTaskList.findIndex((task) => task.id === id);
    updatedTaskList.splice(index, 1);
    setTaskList(updatedTaskList);

    const taskDocRef = collection(firestore, "tasks"); // Get the collection reference to "tasks"
    const snapshot = await getDocs(taskDocRef); // Fetch the tasks documents
    const taskRef = snapshot.docs.find((doc) => doc.data().id === id)?.ref; // Find the document reference with matching id
    await deleteDoc(taskRef); // Delete the document from Firestore
  };

  const moveToDetailshandler = (id) => {
    navigate(`/task/${id}`); // Navigate to the task details page
  };

  return (
    <div className={classes.wrapper}>
      {taskList.length === 0 && (
        <div className={classes.noTasks}>
          <p>No Tasks Found</p>
        </div>
      )}
      <ul className={classes.taskBarList}>
        {taskList.map((task, index) => {
          const isTaskCompleted = task.completedDays.includes(date);

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
