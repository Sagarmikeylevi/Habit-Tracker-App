import Loading from "../UI/Loading";
import SpecificTaskName from "./SpecificTaskName";
import CustomCalendar from "./CustomCalendar";
import Card from "../UI/Card";
import { firestore } from "../HabitTracker";
import { collection, getDoc, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const SpecificTask = () => {
   const [task, setTask] = useState(null);
   // Accessing the 'id' parameter from the URL using the useParams hook
   const { id } = useParams();
   useEffect(() => {
     const fetchTaskData = async () => {
       const taskDocRef = collection(firestore, "tasks");
       const snapshot = await getDocs(taskDocRef);
       const taskRef = snapshot.docs.find((doc) => doc.data().id === id)?.ref;
       const taskDetails = (await getDoc(taskRef)).data();
       console.log(taskDetails);
       setTask(taskDetails);
     };

     fetchTaskData();
   }, [id]);

   if (!task) {
     return <Loading />;
   }

   
  return (
    <Card>
      <SpecificTaskName task={task} />
      <CustomCalendar task={task} />
    </Card>
  );
};

export default SpecificTask;
