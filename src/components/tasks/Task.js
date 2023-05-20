import Card from '../UI/Card';
import TaskCreate from './TaskCreate';
import TaskDate from './TaskDate';
import TaskName from './TaskName';

const Task = () => {
    return (
        <Card>
            <TaskCreate />
            <TaskDate />
            <TaskName />
        </Card>
    )
}

export default Task;