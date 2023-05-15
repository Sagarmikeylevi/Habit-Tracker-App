import { useState } from 'react';
import classes from './CustomCalendar.module.css';

const CustomCalendar = () => {
    const [currentDate, setCurrentDate] = useState(new Date());

    const getCalendarDates = () => {
        const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);

        console.log(currentDate);
        console.log(firstDayOfMonth);
    }
    return (
        <h1>Hi</h1>
    )
}

export default CustomCalendar;