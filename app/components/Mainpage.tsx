"use client";

import React from 'react';
import Image from 'next/image';
import { FaLinkedin, FaSquareFacebook, FaSquareGithub } from 'react-icons/fa6';
import { BiLogoGmail } from 'react-icons/bi';
import {motion} from 'framer-motion';

const Mainpage = () => {
  return (
    <div className='h-full w-full grid grid-cols-2 grid-rows-2 justify-around overflow-x-hidden bg-custom-black'>
        <motion.div key={'leftDiv'} ensure-remount={'leftDiv'} initial={{x:-100,opacity:0}} animate={{x:0,opacity:1}} transition={{duration:0.8,ease:"easeInOut"}} className='col-span-1 row-span-full items-center justify-center mb-20 flex flex-col'>
            <h1 className='text-5xl font-semibold text-white'>Hi! <br/> I am <span className='text-custom-orange'>Jen </span><br/><span className='text-2xl font-light'>FRONTEND WEB DESIGNER</span></h1> 
            <button className=' mt-10 text-xs px-2 py-2 border-2 rounded-sm text-white hover:border-custom-orange outline-none ease-in-out duration-150 focus:bg-custom-orange focus:text-custom-black focus:border-white'>
               Visit My Works
            </button>
        </motion.div>
       
        <div className='flex flex-col col-span-1 row-span-full items-center justify-center relative'>
            <div className='h-full mr-20 border-3 rounded-full border-custom-orange hover:bg-amber-200/20 duration-150 ease-in-out text-white items-center overflow-hidden mb-10 col-span-full'>
                <motion.img key={'mainImage'} ensure-remount={'mainImage'} initial={{scale:1,opacity:0}} animate={{scale:1.1,opacity:1}} transition={{duration:1.5,ease:"easeInOut"}}  className='h-full w-full object-cover' src={"/image.removebg.png"}alt='image'></motion.img>
            </div>
           
            <div className='w-full flex pr-5 flex-col items-end gap-7 mr-20 absolute'>
                 <motion.button key={'fbBtn'} ensure-remount={'fbBtn'} initial={{opacity: 0, y: 30}} animate={{opacity: 1, y: 0}} transition={{duration: 1, ease:"easeIn"}} className='bg-white rounded-sm outline-none ring-2 ring-transparent hover:ring-custom-orange hover:animate-bounce'onClick={()=>window.location.href ='https://www.facebook.com/jenrodriguez25'}>
                    <FaSquareFacebook className='text-2xl scale-115 text-blue-700'/>
                 </motion.button>

                 <motion.button key={'gmailBtn'} ensure-remount={'gmailBtn'} initial={{opacity: 0, y: 30}} animate={{opacity: 1, y: 0}} transition={{duration: 1, delay:0.3, ease:"easeIn"}} className='bg-white rounded-sm outline-none ring-2 ring-transparent hover:ring-custom-orange'onClick={()=>window.location.href = 'mailto:rodriguez.jennifer0204@gmail.com?subject="Job Opportunity"&body="We would like to inform you..."'}>
                    <BiLogoGmail className='text-2xl text-red-500'/>
                 </motion.button>

                 <motion.button key={'linkedinBtn'} ensure-remount={'linkedinBtn'} initial={{opacity: 0, y: 30}} animate={{opacity: 1, y: 0}} transition={{duration: 1,delay:0.6, ease:"easeIn"}} className='bg-white rounded-sm outline-none ring-2 ring-transparent hover:ring-custom-orange'onClick={()=>window.location.href='https://www.linkedin.com/in/jen-rodriguez-9bb9a2322'}>
                    <FaLinkedin className='text-2xl scale-115 text-blue-600'/>
                 </motion.button>

                 <motion.button key={'githubBtn'} ensure-remount={'githubBtn'} initial={{opacity: 0, y: 30}} animate={{opacity: 1, y: 0}} transition={{duration: 1, delay:0.9, ease:"easeIn"}} className='bg-white rounded-sm outline-none ring-2 ring-transparent hover:ring-custom-orange'onClick={()=>window.location.href='https://github.com/rodriguezjen'}>
                    <FaSquareGithub className='text-2xl scale-115'/>
                 </motion.button>
            </div>
        </div>
    </div>
  )

}

export default Mainpage
