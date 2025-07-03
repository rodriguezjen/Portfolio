import { AnimatePresence, motion } from 'framer-motion'
import React, { JSX } from 'react'
import { BiLogoTypescript } from 'react-icons/bi'
import { DiJsBadge } from 'react-icons/di'
import { FaCss3Alt, FaHtml5 } from 'react-icons/fa6'
import { RiNextjsFill, RiTailwindCssFill } from 'react-icons/ri'

interface CardProps{
    icon:number;
    name:string;
    delay:number;
}
const TechCard:React.FC<CardProps> = ({icon,name,delay}) => {
const techIcon:Record<number,JSX.Element> ={
    0:<RiNextjsFill className='text-5xl bg-black rounded-full' />,
    1:<div className="h-7 w-6 relative bg-white flex items-center justify-center text-5xl text-html-color mt-1"><FaHtml5 className="absolute top-1/2 left-1/2 -translate-1/2"/></div>,
    2:<div className="h-7 w-6 relative bg-white flex items-center justify-center text-5xl text-css-color mt-1"><FaCss3Alt className="absolute top-1/2 left-1/2 -translate-1/2"/></div>,
    3:<div className="h-9 w-10 relative bg-black flex items-center justify-center text-5xl text-js-color"><DiJsBadge  className="absolute top-1/2 left-1/2 -translate-1/2 pt-1"/></div>,
    4:<div className="h-9 w-10 relative flex items-center justify-center text-5xl text-tailwind"><RiTailwindCssFill  className="absolute top-1/2 left-1/2 -translate-1/2 pt-1"/></div>,
    5:<div className="h-10 w-10 relative bg-white flex items-center justify-center text-6xl text-tailwind"><BiLogoTypescript  className="absolute top-1/2 left-1/2 -translate-1/2"/></div>,
} 
  return (
   <AnimatePresence mode='wait'>
     <motion.div initial={{y:100,opacity:0}} animate={{y:0,opacity:1}} transition={{duration:0.8,ease:"easeInOut",delay:delay}}className='h-28 w-28 flex flex-col items-center justify-around rounded-md bg-white/20 backdrop-blur-lg hover:bg-color/40 ease-in-out duration-150'>
        {techIcon[icon]||null}
        <p>{name}</p>
    </motion.div>
   </AnimatePresence>
  )
}

export default TechCard
