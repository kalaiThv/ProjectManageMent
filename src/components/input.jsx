import React from 'react';

export default function Input({ label, inputbox, type, value, onChange }) {
  return (
    <div className='flex flex-col space-y-4'>
      <p className='text-left'>
        <label className="font-bold  text-teal-300 mr-4">{label}</label>
        {inputbox === "textarea" ? (
          <textarea
            className="border text-slate-900 border-gray-300 rounded-md p-2 w-full focus:border-stone-600"
            value={value}
            onChange={onChange}
            required
          />
        ) : (
          <input
            type={type === 'date' ? 'date' : 'text'}
            className="border text-slate-900 border-gray-300 rounded-md p-2 w-full"
            value={value}
            onChange={onChange}
            required
          />
        )}
      </p>
      
    </div>
  );
}
