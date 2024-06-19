import { useTaskContext } from '../context/TaskContext'; // Update import
import CompletedTask from './CompletedTask';

function Completed() {
    const { tasks } = useTaskContext(); // Update usage
    return (
        <div>
            {
                (tasks.length !== 0) ? (
                    tasks.map((task, index) => {
                        return (
                            task.completed && <CompletedTask
                                key={index}
                                task={task}
                                id={index}
                            />
                        )
                    })
                ) : (
                    <h1>No Task Found</h1>
                )
            }
        </div>
    );
}

export default Completed;
