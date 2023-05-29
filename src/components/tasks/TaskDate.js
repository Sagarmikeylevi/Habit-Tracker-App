import classes from "./TaskDate.module.css";

const TaskDate = () => {
  // Define a helper function to format dates
  const formatDate = (date, days) => {
    // Create a new Date object based on the given date
    const newDate = new Date(date);
    // Set the date to a specific number of days from the given date
    newDate.setDate(date.getDate() + days);

    // Extract the formatted date and month
    const formattedDate = newDate.getDate();
    const formattedMonth = newDate.toLocaleString("en-US", { month: "short" });

    // Return the formatted date and month as an object
    return { formattedDate, formattedMonth };
  };

  // Get the current date and month
  const date = new Date();
  const currentDate = date.getDate();
  const currentMonth = date.toLocaleString("en-US", { month: "short" });

  // Calculate the previous and next dates
  const prevDateByOne = formatDate(date, -1);
  const prevDateByTwo = formatDate(date, -2);
  const nextDateByOne = formatDate(date, 1);
  const nextDateByTwo = formatDate(date, 2);

  // Render the TaskDate component
  return (
    <div className={classes.wrapper}>
      {/* Render the previous two dates */}
      <span>{prevDateByTwo.formattedDate}</span>
      <span>{prevDateByOne.formattedDate}</span>

      {/* Render the current date and month */}
      <div className={classes.actualDate}>
        <p className={classes.actualDate_Style}>{currentDate}</p>
        <p className={classes.actualDate_month}>{currentMonth}</p>
      </div>

      {/* Render the next two dates */}
      <span>{nextDateByOne.formattedDate}</span>
      <span>{nextDateByTwo.formattedDate}</span>
    </div>
  );
};

export default TaskDate;
