import React from 'react';

export default function LoginProject({ onAddProject }) {
  return (
    <div className="relative mt-24 text-center w-2/3 mx-auto">
      <div className="relative">
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
          <h2 className='text-xl font-bold text-slate-200 mt-4 my-4'>No project Selected</h2>
          <p className='text-slate-200'>Select a project or get started with a new one</p>
          <button
            onClick={onAddProject}
            className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-md mt-5"
          >
            Create new Project
          </button>
        </div>
      </div>
    </div>
  );
}
