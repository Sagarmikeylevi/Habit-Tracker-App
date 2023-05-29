import CreateTaskForm from "../components/createtasks/CreateTaskForm";

const TaskForm = ({ firestore }) => {
  return <CreateTaskForm firestore={firestore} />;
};

export default TaskForm;