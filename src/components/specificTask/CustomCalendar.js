import classes from "./CustomCalendar.module.css";
import TaskStreak from "./TaskStreak";

const CustomCalendar = ({ task }) => {
  // Getting the current date, month, and year
  const currentDate = new Date();
  const currentMonth = currentDate.toLocaleString("default", { month: "long" });
  const currentYear = currentDate.getFullYear();

  // Function to get an array of calendar dates for the current month
  const getCalendarDates = () => {
    const firstDayOfMonth = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      1
    );
    const startingDay = firstDayOfMonth.getDay();
    const daysInMonth = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth() + 1,
      0
    ).getDate();
    const calendarDates = [];

    for (let i = 1; i <= daysInMonth; i++) {
      const date = new Date(
        currentDate.getFullYear(),
        currentDate.getMonth(),
        i
      );
      calendarDates.push(date);
    }

    // Add preceding empty cells
    for (let i = 0; i < startingDay; i++) {
      calendarDates.unshift(null);
    }

    return calendarDates;
  };

  // Getting the array of calendar dates for the current month
  const calendarDates = getCalendarDates();

  // Function to count the streaks of completed tasks
  const countStreaks = () => {
    let streakCount = 0;
    let longestStreak = 0;

    const currentDate = new Date().getDate();

    for (let i = 0; i <= currentDate; i++) {
      const date = calendarDates[i];

      if (date) {
        const dayOfMonth = date.getDate();

        // Check if the task for the day is completed
        const isCompleted = task.completedDays.includes(dayOfMonth);

        if (isCompleted) {
          streakCount++;

          // Update the longest streak if applicable
          if (streakCount > longestStreak) {
            longestStreak = streakCount;
          }
        } else {
          // Reset the streak count if the task is not completed
          streakCount = 0;
        }
      }
    }

    return { streakCount, longestStreak };
  };

  // Counting the streaks of completed tasks

  const { streakCount, longestStreak } = countStreaks();

  return (
    <div className={classes.wrapper}>
      <div>
        <span></span>
        <h2>{`${currentMonth}  ${currentYear}`}</h2>
      </div>
      <table>
        <thead>
          <tr>
            <th>Sun</th>
            <th>Mon</th>
            <th>Tue</th>
            <th>Wed</th>
            <th>Thu</th>
            <th>Fri</th>
            <th>Sat</th>
          </tr>
        </thead>
        <tbody>
          {calendarDates
            .reduce((rows, date, index) => {
              if (index % 7 === 0) {
                rows.push([]);
              }
              rows[rows.length - 1].push(date);
              return rows;
            }, [])
            .map((row, rowIndex) => (
              <tr key={rowIndex}>
                {row.map((date, cellIndex) => {
                  // Check if the date exists in task.completedDays
                  const isCompleted = task.completedDays.includes(
                    date?.getDate()
                  );

                  // Apply different styles based on completion status
                  const cellStyles = isCompleted
                    ? classes.completedDate
                    : classes.emptyDate;

                  return (
                    <td key={cellIndex} className={cellStyles}>
                      {date ? date.getDate() : ""}
                    </td>
                  );
                })}
              </tr>
            ))}
        </tbody>
      </table>
      <TaskStreak streakCount={streakCount} longestStreak={longestStreak} />
    </div>
  );
};

export default CustomCalendar;
