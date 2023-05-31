import {FaBomb} from 'react-icons/fa';
import classes from './Error.module.css';

const Error = ({title, message}) => {
    return (
        <div className={classes.wrapper}>
            <FaBomb className={classes.errorIcon} />
            <h2>{title}</h2>
            <p>{message}</p>
        </div>
    )
}

export default Error;