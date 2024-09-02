import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';

export default function Log({ projects, onSelectProject, onDeleteProject }) {
  return (
    <div className='mt-5'>
      {projects.map((project, index) => (
        <div
          key={index}
          style={{
            borderRadius: '20px',
          }}
          className='text-slate-100 m-4 p-4 bg-gray-800 flex justify-between items-center'
        >
          <span onClick={() => onSelectProject(project)}>{project.title}</span>
          <div className="flex space-x-4">
            <FontAwesomeIcon icon={faEdit} onClick={() => onSelectProject(project)} />
            <FontAwesomeIcon icon={faTrash} onClick={() => onDeleteProject(project)} />
          </div>
        </div>
      ))}
    </div>
  );
}
