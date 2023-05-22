import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { FaCaretUp, FaCaretDown } from "react-icons/fa";
import { v4 as uuidv4 } from "uuid"; // Import the v4 function from the uuid library
import classes from "./CreateTaskForm.module.css";
import Card from "../UI/Card";
import { addTask } from "../../store/habitSlice";
import { useState } from "react";

const CreateTaskForm = () => {
  const [taskTitle, setTaskTitle] = useState("");
  const [taskFrequency, setTaskFrequency] = useState(1);

  const taskTitleHandler = (event) => {
    setTaskTitle(event.target.value);
  };

  const increaseFrequency = () => {
    setTaskFrequency((prevFreq) => {
      if (prevFreq === 7) return prevFreq;
      return prevFreq + 1;
    });
  };

  const decreaseFrequency = () => {
    setTaskFrequency((prevFreq) => {
      if (prevFreq === 1) return prevFreq;
      return prevFreq - 1;
    });
  };

  const dispatch = useDispatch();
  const { link } = useParams();
  const decodedLink = decodeURIComponent(link);
  const navigate = useNavigate();

  const addTaskHandler = (event) => {
    event.preventDefault();

    const newTask = {
      id: uuidv4(), // Generate a unique ID using uuidv4()
      title: taskTitle,
      categoryURL: decodedLink,
      numOfDays: taskFrequency,
      startingDate: "21-May-2023",
      completedDays: [],
    };

    dispatch(addTask(newTask));
    navigate("/");
  };

  let showFrequency = <p>{taskFrequency + " " + "day"}</p>;

  if (taskFrequency > 1 && taskFrequency < 7) {
    showFrequency = <p>{taskFrequency + " " + "days"}</p>;
  }
  if (taskFrequency === 7) {
    showFrequency = <p>{"Everyday"}</p>;
  }

  return (
    <Card className={classes.wrapper}>
      <div className={classes.header}>
        <h1>Hi There!</h1>
        <p>Create a new habit for yourself</p>
      </div>

      <form onSubmit={addTaskHandler}>
        <input
          type="text"
          placeholder="enter new task"
          onChange={taskTitleHandler}
          value={taskTitle}
        />
        <div className={classes.taskFrequency}>
          {showFrequency}
          <div className={classes.frequencyCounter}>
            <FaCaretUp
              className={classes.caretUp}
              onClick={increaseFrequency}
            />
            <FaCaretDown
              className={classes.caretDown}
              onClick={decreaseFrequency}
            />
          </div>
        </div>
        <button type="submit">Add Task</button>
      </form>
    </Card>
  );
};

export default CreateTaskForm;
