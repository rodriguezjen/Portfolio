import React from 'react';
import TechCard from './TechCard';
import { motion } from 'framer-motion';

const About = () => {
const techName =["Next.js","HTML 5","CSS 3","JavaScript","Tailwind","TypeScript"];
  return (
    <div className='h-full w-full flex flex-col  text-white bg-custom-black pt-5 items-center'>
        <motion.h1 initial={{x:-100,opacity:0}} animate={{x:0,opacity:1}} transition={{duration:0.8,ease:"easeInOut"}} className='w-full text-4xl font-semibold md:pl-50 pl-5 pb-5 pt-5 text-custom-orange flex hover:text-blue-400'>About</motion.h1>
            <div className='h-full w-full px-5 flex pt-5 justify-center'>
                <p className='h-40 md:w-2/3 text-lg text-justify text-custom-white'>Hi, I&apos;m Jennifer Rodriguez, a frontend web developer specializing in intuitive, user-centered design.
                  With a strong foundation in UX/UI and a tech stack that includes Next.js, HTML, CSS, JavaScript, Tailwind, and TypeScript,<span className='text-custom-orange '> I build responsive</span> , <span className='text-custom-orange'>accessible web</span> experiences that prioritize usability and performance. I&apos;m passionate about crafting clean, functional interfaces that make the web a better place, one project at a time.</p>
            </div>

            <h2 className='text-3xl font-semibold text-blue-200 md:mt-5 mt-15'>Tech Stack</h2>

            <div className='h-full w-auto gap-5 grid md:grid-cols-6 grid-cols-3 pb-10 my-10 overflow-hidden'>
            {
              techName.map((n,i)=>(
              <TechCard key={i} icon={i} name={n} delay={i/5}/>
              ))
            }
            </div>
            
           
           

    </div>
  )
}

export default About
