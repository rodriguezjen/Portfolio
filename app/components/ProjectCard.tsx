import React, { JSX } from 'react'
import Image from 'next/image'
import { IoLogoHtml5 } from 'react-icons/io'
import { FaCss3Alt } from 'react-icons/fa6'
import { FaJsSquare } from 'react-icons/fa'
import { RiNextjsFill, RiTailwindCssFill } from 'react-icons/ri'
import { SiTypescript } from 'react-icons/si'
import { motion } from 'framer-motion'

interface ProjectCardPropts{
  projimg:string;
  projlogo:string;
  tech:string[];
  title:string;
  dsc:string;
  link:string;  

  icontop:string;
  delay:number;
}


const ProjectCard:React.FC<ProjectCardPropts> = ({projimg,projlogo,tech,title,dsc,link,icontop,delay}) => {
const techStack:Record<string,JSX.Element>={
    "html": <div className='bg-white rounded-full h-5 w-5 flex items-center justify-center mt-3 hover:animate-bounce'><IoLogoHtml5 className='scale-150 text-html-color'/></div>,
    "css": <div className='bg-white rounded-full h-5 w-5 flex items-center justify-center mt-3 hover:animate-bounce'><FaCss3Alt className='scale-125 text-css-color'/></div>,
    "js": <FaJsSquare className=' text-js-color mt-2.5 hover:animate-bounce scale-125'/>,
    "njs": <RiNextjsFill className='text-white bg-black rounded-full mt-3 hover:animate-bounce scale-125'/>,
    "tailwind": <RiTailwindCssFill className='text-tailwind mt-3 hover:animate-bounce scale-125' />,
    "ts": <SiTypescript className='bg-white text-tailwind rounded-sm mt-3 hover:animate-bounce scale-110'/>

}
  return (
    <motion.div initial={{scale:0.7,opacity:0}} animate={{scale:1,opacity:1 }} transition={{ type: "spring", stiffness: 100, damping: 20, delay:delay,}} className='h-full col-span-1 rounded-xl border-blue-300 border-2 flex flex-col bg-white/20 backdrop-blur-lg overflow-hidden'>
        <div className='h-auto w-full relative'>           
            <Image className='w-full object-contain rounded-b-2xl overflow-hidden' src={projimg} alt='img' height={1000} width={1000} priority/>
            <Image className={`h-20 w-20 object-contain rounded-full border-2 border-blue-500 ml-3 absolute ${icontop} bg-white`} src={projlogo} alt='logo' height={1000} width={1000} priority />
    
        </div>

        <div className='flex flex-col px-3 justify-center'>
           
            <div className='flex justify-end text-2xl gap-3'>
              {tech.map((val)=>(
                techStack[val]
              ))}
            </div>
            <h2 className='text-lg pt-3 text-custom-orange'>{title}</h2>
            <p className='text-white pt-1 text-sm'>{dsc}</p>
            {
                link&&(<a className='absolute bottom-2 right-2 text-white focus:underline hover:text-custom-orange' href={link}>docu</a>)
            }
           
        </div>
    </motion.div>

  )
}

export default ProjectCard
