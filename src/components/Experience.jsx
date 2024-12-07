import React from 'react'
import { useState } from 'react';

const Experience = ({children}) => {

  const [newExperiences, setNewExperiences] = useState([]);
  const [date, setDate] = useState('');
  const [type, setType] = useState('');
  const [lieu, setLieu] = useState('');
  const [description, setDescription] = useState('');
  const [technologie, setTechnologie] = useState('');
  const handleChange = (e) => {
    const { name, value } = e.target; 
    if (name === "date") {
      setDate(value); 
    } else if (name === "type") {
      setType(value); 
    }
    else if (name === "description") {
      setDescription(value); 
    }
    else if (name === "lieu") {
      setLieu(value); 
    }
    else if (name === "technologie") {
      setTechnologie(value); 
    }
  };
  
  function AjouterExperience(e){
      e.preventDefault();
      if (date.trim() !== '' && type.trim() !== '' && lieu.trim() !== '' && description.trim() !== '' && technologie.trim() !== '') {
        setNewExperiences([...newExperiences, { date, type, lieu, description , technologie }]); 
        setDate('');
        setType('');
        setLieu('');
        setDescription('');
        setTechnologie('');
      }
  }
  return (
    <div className='border-b border-neutral-900 pb-4'>
      <h1 className='my-20 text-center text-4xl'>Experience</h1>
      {children}
      {newExperiences.map((experience, index) => (
          <div key={index} {...experience}  className='mb-8 flex flex-wrap lg:justify-center'>
                <div className='w-full lg:w-1/4'>
                <p className='mb-2 text-sm text-neutral-400'>{experience.date}</p>
                </div>
                <div className='w-full max-w-xl lg;w-3/4'>
                <h6 className='mb-2 font-semibold'>{experience.type} - <span className='text-sm text-purple-100'>{experience.lieu}</span></h6>
                <p className='mb-4 text-neutral-400'>{experience.description}</p>
                <span className='mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800'>{experience.technologie}</span>
                
                </div>
          </div>
        ))}
    
        <form onSubmit={AjouterExperience}>
        <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
        <div class="sm:col-span-3">
          <label for="date" class="block text-sm/6 font-medium text-white-900">Date</label>
          <div class="mt-2">
            <input value={date} onChange={handleChange} type="text" name="date" id="date" autocomplete="given-name" class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
          </div>
        </div>

        <div class="sm:col-span-3">
          <label for="type" class="block text-sm/6 font-medium text-white-900">type</label>
          <div class="mt-2">
            <input value={type} onChange={handleChange} type="text" name="type" id="type" autocomplete="family-name" class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
          </div>
        </div>
        <div class="sm:col-span-3">
          <label for="lieu" class="block text-sm/6 font-medium text-white-900">Lieu</label>
          <div class="mt-2">
            <input value={lieu} onChange={handleChange} type="text" name="lieu" id="lieu" autocomplete="family-name" class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
          </div>
        </div>
        <div class="sm:col-span-3">
          <label for="technologie" class="block text-sm/6 font-medium text-white-900">Technologie</label>
          <div class="mt-2">
            <input value={technologie} onChange={handleChange} type="text" name="technologie" id="technologie" autocomplete="family-name" class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
          </div>
        </div>
        <div class="sm:col-span-3">
          <label for="description" class="block text-sm/6 font-medium text-white-900">description</label>
          <div class="mt-2">
          <textarea value={description} onChange={handleChange} name="description" id="description" rows="3" class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"></textarea>
          </div>
        </div>
        </div>
        <div class="mt-6 flex items-center justify-end gap-x-6">
    <button type="button" class="text-sm/6 font-semibold text-white-900">Cancel</button>
    <button  type="submit" class="rounded-md bg-purple-800 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-purple-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-800">Ajouter une experience</button>
  </div>
  </form>
    </div>
  )
}

export default Experience
