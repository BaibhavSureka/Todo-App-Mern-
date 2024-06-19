import { useTaskContext } from '../context/TaskContext';
import { useTokenContext } from '../context/TokenContext';
import Task from './Task/Task';

const AllTask = () => {
    const { tasks } = useTaskContext();
    const { userToken } = useTokenContext();

    return (
        <div>
            {tasks.length > 0 ? (
                tasks.map(task => (
                    <Task key={task._id} task={task} id={task._id} userToken={userToken} />
                ))
            ) : (
                <p>No tasks available.</p>
            )}
        </div>
    );
};

export default AllTask;
