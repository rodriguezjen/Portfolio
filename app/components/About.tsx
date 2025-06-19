import React from 'react';
import { BiLogoTypescript } from 'react-icons/bi';
import { DiJsBadge } from 'react-icons/di';
import { FaCss3Alt, FaHtml5, FaJs } from 'react-icons/fa';
import { RiNextjsFill, RiTailwindCssFill } from 'react-icons/ri';
import { SiTypescript } from 'react-icons/si';

const About = () => {
  return (
    <div className='h-full w-full flex flex-col text-white bg-custom-black pt-5'>
        <h1 className='text-2xl ml-5 text-custom-orange'>About Me</h1>
            <div className='h-full w-full grid grid-cols-2 gap-20 px-5'>
                <p className='h-full flex indent-5 text-justify pt-5 col-span-1'>Hi, I'm Jennifer Rodriguez, a frontend web developer specializing in intuitive, user-centered design.
                  With a strong foundation in UX/UI and a tech stack that includes Next.js, HTML, CSS, JavaScript, Tailwind, and TypeScript, I build responsive, accessible web experiences that prioritize usability and performance. I’m passionate about crafting clean, functional interfaces that make the web a better place, one project at a time.</p>

                  <div className='col-span-1 gap-3 grid grid-cols-3'>
                      <div className='h-20 w-20 col-span-1 text-7xl bg-black text-white flex items-center justify-center rounded-md border-3 border-white hover:scale-105 ease-in-out duration-150'><RiNextjsFill /></div>
                      <div className='h-20 w-20 col-span-1 text-7xl bg-white text-html-color flex items-center justify-center rounded-md border-3 border-html-color hover:scale-105 ease-in-out duration-150'><FaHtml5 /></div>
                      <div className='h-20 w-20 col-span-1 text-7xl bg-white text-css-color flex items-center justify-center rounded-md border-3 border-css-color hover:scale-105 ease-in-out duration-150'><FaCss3Alt /></div>
                      <div className='h-20 w-20 col-span-1 text-7xl bg-black text-js-color flex items-center justify-center rounded-md  hover:scale-105 ease-in-out duration-150'><DiJsBadge /></div>
                      <div className='h-20 w-20 col-span-1 text-6xl bg-white text-tailwind flex items-center justify-center rounded-md border-3 border-tailwind hover:scale-105 ease-in-out duration-150'><RiTailwindCssFill /></div>                
                      <div className='h-20 w-20 col-span-1 text-9xl bg-white text-tailwind flex items-center justify-center rounded-md  hover:scale-105 ease-in-out duration-150'><BiLogoTypescript className='h-full w-full' /></div>
                  </div>
            </div>
            
         
            
    </div>
  )
}

export default About
