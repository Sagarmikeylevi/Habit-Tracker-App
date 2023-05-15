import classes from "./SpecificTask.module.css";
import SpecificTaskName from "./SpecificTaskName";
import CustomCalendar from "./CustomCalendar";

const SpecificTask = () => {
  return (
    <div className={classes.wrapper}>
      <SpecificTaskName />
      <CustomCalendar />
    </div>
  );
};

export default SpecificTask;
