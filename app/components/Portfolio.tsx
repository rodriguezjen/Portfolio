import React from 'react'
import ProjectCard from './ProjectCard'
import { motion } from 'framer-motion'
const Portfolio = () => {
  return (
    <div className='h-full w-full items-start flex flex-col gap-5 pb-5 px-5 bg-custom-black'>
      <motion.h1 initial={{x:-100,opacity:0}} animate={{x:0,opacity:1}} transition={{duration:0.8,ease:"easeInOut"}} className='col-span-full text-left text-3xl font-semibold text-custom-orange ml-15'>Project</motion.h1>
     
        <div className='h-full w-full grid grid-cols-3 gap-3 overflow-hidden'>
          <ProjectCard projimg={'/yourcravingspic.jpg'} projlogo={'/yourcravingslogo.png'} tech={["html", "css", "js"]} title={'Your Cravings'} dsc={'Indulge in the sweet life with our handcrafted pastries, baked fresh daily to delight every craving. Made with passion, served with joy.'} link={''} icontop={'top-5/6'} delay={0}/>

          <ProjectCard projimg={'/project2.jpg'} projlogo={'/sweettastebg.png'} tech={["njs", "tailwind", "ts"]} title={'Sweet Taste'} dsc={'Delicious pastries made fresh every day. Quality ingredients, homemade taste, and treats you’ll keep coming back for.'} link={'https://github.com/rodriguezjen/Sweet-taste-Web-App'} icontop={'-bottom-10'} delay={0.5}/>
       
          <ProjectCard projimg={'/cosme.jpeg'} projlogo={'/logoko.png'} tech={["njs", "tailwind", "ts"]} title={'Cosme'} dsc={' Our carefully curated collection of hair care and makeup essentials is designed to enhance your natural beauty—no matter your age, style, or routine. Explore high-quality, affordable products that deliver real results without compromise. Cosme offers elegant solutions tailored to your unique beauty needs. Discover your glow at Cosme.'} link={'https://github.com/rodriguezjen/Cosme-Website'} icontop={'-bottom-10'} delay={1}/>
        </div>
    </div>
  )
}

export default Portfolio
