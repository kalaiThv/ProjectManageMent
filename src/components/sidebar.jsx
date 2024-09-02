import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faBars, faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import Log from "./Log.jsx"
export default function Sidebar({ projects, onAddProject, onSelectProject, onDeleteProject }) {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <div className="container">
      {!isOpen && (
        <button className="fixed top-4 left-4 z-50 p-2 bg-gray-800 text-white rounded-md" onClick={toggleSidebar}>
          <FontAwesomeIcon icon={faBars} />
        </button>
      )}
      <aside className={`fixed top-0 left-0 h-full w-64 text-gray-950 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out bg-teal-50 md:text-xl`}>
        <button className="fixed top-4 left-4 z-50 p-2 bg-gray-800 text-white rounded-md" onClick={toggleSidebar}>
          <FontAwesomeIcon icon={faArrowLeft} />
        </button>
        <div className='items-center justify-center'>
          <h2 className='bg-gray-800 w-full mt-20 text-slate-100'>Your Projects</h2>
          <button className='px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-md mt-5' onClick={onAddProject}>
            <FontAwesomeIcon icon={faPlusCircle} /> Add Project
          </button>
          <Log
            projects={projects}
            onSelectProject={onSelectProject}
            onDeleteProject={onDeleteProject}
          />
        </div>
      </aside>
    </div>
  );
}
