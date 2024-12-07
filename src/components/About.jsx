import React from 'react'
import profilePic from "../assets/HOProfile.jpg"


const About = ({nom,state, description}) => {
  return (
    <div className='border-b border-neutral-900 pb-4 lg:mb-35'>
        <h1 className='my-20 text-center text-4xl'>A propo de <span className=' text-neutral-500'>Moi</span> </h1>
        <div className='flex flex-wrap'>
            <div className='w-full lg:w-1/2'>
                <div className='flex flex-col items-center lg:items-start'>
                    <h1 className='pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-6xl' >{nom}</h1>
                    <span className='bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent'>{state}</span>
                    <p className='my-2 max-w-xl py-6 font-light tracking-tighter'>{description}</p>
                </div>
            </div>
            <div className='w-full lg:w-1/2 lg:p-8'>
                <div className='flex justify-center'>
                    <img className='rounded-full' src={profilePic} alt="hanane" />
                </div>
            </div>
        </div>
        
    </div>
    
  );
}

export default About
