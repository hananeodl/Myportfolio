import React from 'react'
import {RiReactjsLine} from "react-icons/ri";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { TbBrandJavascript } from "react-icons/tb";
import { SiTypescript } from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { FaPhp } from "react-icons/fa";
import { SiSpringboot } from "react-icons/si";
import { FaAngular } from "react-icons/fa";


const Competences = () => {
  return (
    <div className='border-b border-neutral-800 pbb-24'>
      <h1 className='my-20 text-center text-4xl'>Competences</h1>
      <div className='flex flex-wrap items-center justify-center gap-4'>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <RiReactjsLine className='text-7xl text-cyan-400'/>
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <FaHtml5 className='text-7xl text-orange-600'/>
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <FaCss3Alt className='text-7xl text-blue-600'/>
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <TbBrandJavascript className='text-7xl text-yellow-400'/>
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiTypescript className='text-7xl text-blue-800'/>
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <FaJava className='text-7xl text-orange-400'/>
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <FaPhp className='text-7xl text-sky-700'/>
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiSpringboot className='text-7xl text-green-500'/>
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <FaAngular className='text-7xl text-red-700'/>
        </div>
      </div>
    </div>
  )
}

export default Competences
