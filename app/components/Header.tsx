import React from 'react'
import { NavProps } from '../types'

const Header = ({setNav}:NavProps) => {
const toggleNav = (nav:string) => {
  setNav(nav);
}
  return (
    <div className='h-20 w-full bg-custom-black flex justify-center'>
        <div className='flex space-x-4 pt-5 text-gray-300 pb-2'>
            <button className='hover:text-custom-orange ease-in-out duration-150 focus:text-custom-black border-2 border-transparent focus:border-white focus py-1 px-3 rounded-full focus:bg-custom-orange' onClick={()=>toggleNav("mainpage")}>Home</button>
            <button className='hover:text-custom-orange ease-in-out duration-150 focus:text-custom-black border-2 border-transparent focus:border-white focus py-1 px-3 rounded-full focus:bg-custom-orange' onClick={()=>toggleNav("about")}>About</button>
            <button className='hover:text-custom-orange ease-in-out duration-150 focus:text-custom-black border-2 border-transparent focus:border-white focus py-1 px-3 rounded-full focus:bg-custom-orange' onClick={()=>toggleNav("portfolio")}>Project</button>
        </div>
    </div>
  )
}

export default Header
