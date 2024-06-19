import Task from './Task/Task';
import { useTaskContext } from '../context/TaskContext'; // Update import

function Active() {
    const { tasks } = useTaskContext(); // Update usage
    return ( 
        <div>
        {
            (tasks.length !==0) ? (
                tasks.map((task, index) => {
                    return (
                        !task.completed && <Task
                            key={index}
                            task={task}
                            id={String(index)}
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

export default Active;
