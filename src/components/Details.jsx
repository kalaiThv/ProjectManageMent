import React, { useState } from 'react';
import Input from './input';

export default function Details({ onSaveProject,onAddProject }) 
{
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState('');

  function  handleSave () {
    const newProject = { title, description, dueDate };
    onSaveProject(newProject);
  };
  
  return (
    <div>
      <div className='flex justify-end space-x-4 mb-4'>
        <button className="px-4 py-2 border-2 text-teal-300 rounded-md" onClick={onAddProject}>Cancel</button>
        <button className="px-4 py-2 bg-green-700 text-white rounded-md" onClick={
          title!=''&& description!='' && dueDate !='' ?  handleSave: ()=>alert("Please Fill all the Field")}>Save</button>
      </div>
      <div className="border-2 border-white p-6 rounded-lg bg-gray-900">
        <div className="flex flex-col space-y-4">
          <Input label="Title" inputbox="input" value={title} onChange={(e) => setTitle(e.target.value)} />
          <Input label="Description" inputbox="textarea" value={description} onChange={(e) => setDescription(e.target.value)} />
          <Input label="DueDate" inputbox="input" type="date" value={dueDate} onChange={(e) => setDueDate(e.target.value)} />
        </div>
      </div>
    </div>
  );
}
