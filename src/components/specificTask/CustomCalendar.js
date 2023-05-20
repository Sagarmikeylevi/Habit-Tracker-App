import React from "react";
import { useState } from "react";
// import { FaChevronLeft } from 'react-icons/fa';
import classes from "./CustomCalendar.module.css";
import TaskStreak from "./TaskStreak";

const CustomCalendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

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
        <h2>September 2018</h2>
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
          {calendarDates.map((date, index) => (
            <React.Fragment key={index}>
              {index % 7 === 0 && <tr />}
              <td>{date ? date.getDate() : ""}</td>
            </React.Fragment>
          ))}
        </tbody>
      </table>

      <TaskStreak />
    </div>
  );
};

export default CustomCalendar;
