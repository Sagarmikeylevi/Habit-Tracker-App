import { FaBomb } from "react-icons/fa";
import classes from "./Error.module.css";

// Error component
const Error = ({ title, message }) => {
  return (
    <div className={classes.wrapper}>
      <FaBomb className={classes.errorIcon} />{" "}
      {/* Renders the FaBomb icon component */}
      <h2>{title}</h2> {/* Renders the error title */}
      <p>{message}</p> {/* Renders the error message */}
    </div>
  );
};

export default Error;
