import React from "react";
import classes from "./CustomCalendar.module.css";
import TaskStreak from "./TaskStreak";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const CustomCalendar = () => {
  const tasks = useSelector(state => state.habits.tasks);
  
  const { id } = useParams();
  const task = tasks.find((task) => task.id === id);
  // console.log(task);
  // console.log(task.completedDays);



  const currentDate = new Date();
  const currentMonth = currentDate.toLocaleString('default', { month: 'long' });
  const currentYear = currentDate.getFullYear();

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

  const calendarDates = getCalendarDates();

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

      <TaskStreak />
    </div>
  );
};

export default CustomCalendar;
