import Loading from "../UI/Loading"; // Import the Loading component
import SpecificTaskName from "./SpecificTaskName"; // Import the SpecificTaskName component
import CustomCalendar from "./CustomCalendar"; // Import the CustomCalendar component
import Card from "../UI/Card"; // Import the Card component
import { firestore } from "../HabitTracker"; // Import the firestore instance from HabitTracker module
import { collection, getDoc, getDocs } from "firebase/firestore"; // Import Firestore functions
import { useEffect, useState } from "react"; // Import necessary hooks from React
import { useParams } from "react-router-dom"; // Import useParams hook from react-router-dom

const SpecificTask = () => {
  const [task, setTask] = useState(null); // Initialize state variable for task
  // Accessing the 'id' parameter from the URL using the useParams hook
  const { id } = useParams();

  useEffect(() => {
    const fetchTaskData = async () => {
      const taskDocRef = collection(firestore, "tasks"); // Get the collection reference to "tasks"
      const snapshot = await getDocs(taskDocRef); // Fetch the tasks documents
      const taskRef = snapshot.docs.find((doc) => doc.data().id === id)?.ref; // Find the document reference with matching id
      const taskDetails = (await getDoc(taskRef)).data(); // Get the data from the document
      setTask(taskDetails); // Set the task details in component state
    };

    fetchTaskData();
  }, [id]);

  if (!task) {
    return <Loading />; // If task is null, render the Loading component
  }

  return (
    <Card>
      <SpecificTaskName task={task} />

      <CustomCalendar task={task} />
    </Card>
  );
};

export default SpecificTask;
