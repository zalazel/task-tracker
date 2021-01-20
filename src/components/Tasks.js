import React from 'react'
import Task from './Task'


export const Tasks = ({tasks, onDelete, toggleReminder}) => {

    return (
        <div>
            {tasks.map((task)=>(

                <Task key={task.id} task={task} onDelete={onDelete} toggleReminder={toggleReminder}  />
                
            ))}
        </div>
    )
}
