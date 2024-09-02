import  { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
export default function Tasks({ project, onSaveTask }) 
{
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  function handleAddTask()
  {
    if (newTask !== '') 
    {
      const updatedTasks = [...tasks, { text: newTask, completed: false }];
      setTasks(updatedTasks);
      setNewTask('');
      onSaveTask({ ...project, tasks: updatedTasks });
    }
  };
  

  function handleDeleteTask (deleteTask) 
  {
    const updatedTasks = [];
    for (let i = 0; i < tasks.length; i++) 
    {
      if (tasks[i] !== deleteTask) 
      {
        updatedTasks.push(tasks[i]);
      }
    }
    setTasks(updatedTasks);
    onSaveTask({ ...project, tasks: updatedTasks });
  };

  return (
    <div className="mt-8 p-4 bg-gray-900 text-teal-300 rounded-lg a">
      <div className=' text-left mb-4'>
        <h2 className="text-xl font-bold  uppercase">{project.title}</h2>
        <h3>Description : {project.description}</h3>
        <h4>Due Date : {project.dueDate}</h4>
      </div>
      
      <div className="flex mb-4">
        <input
          type="text"
          className="flex-grow p-2 border rounded-md text-slate-900"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Add a new task"
        />
        <button className="ml-4 px-4 py-2 bg-blue-600 text-white rounded-md" onClick={handleAddTask}>
          Add Task
        </button>
      </div>
      <ul className="space-y-4">
        {tasks.map((task) => (
          <li  className="flex justify-between items-center bg-gray-800 p-4 rounded-md">
            <span
              className={`flex-grow text-white`}
            >
              {task.text}
            </span>
            <FontAwesomeIcon icon={faTrash} onClick={() => handleDeleteTask(task)}/>
          </li>
        ))}
      </ul>
    </div>
  );
}
