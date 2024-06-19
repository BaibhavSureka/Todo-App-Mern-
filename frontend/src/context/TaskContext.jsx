// src/context/TaskContext.js
import React, { createContext, useReducer } from 'react';
import PropTypes from 'prop-types';
import taskReducer from '../reducer/taskReducer';

const TaskContext = createContext();

const TaskProvider = ({ children }) => {
    const [tasks, dispatch] = useReducer(taskReducer, []);

    return (
        <TaskContext.Provider value={{ tasks, dispatch }}>
            {children}
        </TaskContext.Provider>
    );
};

TaskProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

const useTaskContext = () => {
    const context = React.useContext(TaskContext);
    if (!context) {
        throw new Error('useTaskContext must be used within a TaskProvider');
    }
    return context;
};

export { TaskProvider, useTaskContext };
export default TaskContext;
