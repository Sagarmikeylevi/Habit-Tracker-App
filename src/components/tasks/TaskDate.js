import classes from './TaskDate.module.css';

const TaskDate = () => {
    return (
      <div className={classes.wrapper}>
        <span>17</span>
        <span>18</span>
        <div className={classes.actualDate}>
            <p className={classes.actualDate_Style}>19</p>
            <p className={classes.actualDate_month}>June</p>
        </div>
        <span>20</span>
        <span>21</span>
      </div>
    );
}

export default TaskDate;