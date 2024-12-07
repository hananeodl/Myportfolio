import React from 'react'
import { useState } from 'react';

const Projects = (props) => {

  const [newProjects, setNewProjects] = useState([])
  const [description ,setDescription] = useState('');
  const [titre, setTitre] = useState('');
  const [image, setImage] = useState('');
  const [technologie, setTechnologie] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target; 
    if (name === "titre") {
      setTitre(value); 
    } else if (name === "description") {
      setDescription(value); 
    }
    else if (name === "image") {
      setImage(value); 
    }
    else if (name === "technologie") {
      setTechnologie(value); 
    }
  };


  function AjouterProjet(e){
    e.preventDefault();
    if (titre.trim() !== '' && description.trim() !== ''  && technologie.trim() !== '') {
      setNewProjects([...newProjects, { titre, description, image, technologie }]); 
      setTitre('');
      setDescription('');
      setImage('');
      setTechnologie('');
    }
  }
  return (
    <div className='border-b border-neutral-900 pb-4'>
      <h1 className='my-20 text-center text-4xl'>projets</h1>
      <div> 
        {props.projects.map((project, index) => (
          <div key={index} {...project}  className='mb-8 flex flex-wrap lg:justify-center'>
            <div className='w-full lg:w-1/4'>
            <img src={project.image} alt={project.titre} width={150} height={150} className ="mb-6 rounded" />
                </div>
                <div className='w-full max-w-xl lg;w-3/4'>
                <h6 className='mb-2 font-semibold'>{project.titre} </h6>
                <p className='mb-4 text-neutral-400'>{project.description}</p>
                {project.technologies.map((tech , index)=>(
                    <span key={index} className='mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800'>{tech}</span>
                ))}
                </div>
          </div>
        ))}
        {newProjects.map((project, index) => (
          <div key={index} {...project}  className='mb-8 flex flex-wrap lg:justify-center'>
            <div className='w-full lg:w-1/4'>
            <img src={project.image} alt={project.titre} width={150} height={150} className ="mb-6 rounded" />
                </div>
                <div className='w-full max-w-xl lg;w-3/4'>
                <h6 className='mb-2 font-semibold'>{project.titre} </h6>
                <p className='mb-4 text-neutral-400'>{project.description}</p>
                <span  className='mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800'>{project.technologie}</span>
                </div>
          </div>
        ))}
        </div>

<form onSubmit={AjouterProjet}>
        <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
        <div class="sm:col-span-3">
          <label for="titre" class="block text-sm/6 font-medium text-white-900">Titre</label>
          <div class="mt-2">
            <input value={titre} onChange={handleChange} type="text" name="titre" id="titre" autocomplete="given-name" class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
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
    <button  type="submit" class="rounded-md bg-purple-800 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-purple-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-800">Ajouter un projet</button>
  </div>
  </form>
    </div>
  )
}

export default Projects
