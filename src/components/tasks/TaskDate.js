import classes from './TaskDate.module.css';

const TaskDate = () => {
   const formatDate = (date, days) => {
     const newDate = new Date(date);
     newDate.setDate(date.getDate() + days);
     const formattedDate = newDate.getDate();
     const formattedMonth = newDate.toLocaleString("en-US", { month: "short" });
     return { formattedDate, formattedMonth };
   };

   const date = new Date();
   const currentDate = date.getDate();
   const currentMonth = date.toLocaleString("en-US", { month: "short" });
   const prevDateByOne = formatDate(date, -1);
   const prevDateByTwo = formatDate(date, -2);
   const nextDateByOne = formatDate(date, 1);
   const nextDateByTwo = formatDate(date, 2);

    return (
      <div className={classes.wrapper}>
        <span>{prevDateByOne.formattedDate}</span>
        <span>{prevDateByTwo.formattedDate}</span>
        <div className={classes.actualDate}>
            <p className={classes.actualDate_Style}>{currentDate}</p>
            <p className={classes.actualDate_month}>{currentMonth}</p>
        </div>
        <span>{nextDateByOne.formattedDate}</span>
        <span>{nextDateByTwo.formattedDate}</span>
      </div>
    );
}

export default TaskDate;