import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../assets/Images/Logo.svg'

const Nav = () => {
  return (
    <div>

      <nav >

        <div className ="container mx-auto flex justify-between py-6">
         <div className='flex pl-1'>
             <Link to="/"><img src={Logo} alt="Logo" className="w-10 hover:bg-black rounded cursor-pointer" /></Link>
          <Link to="/" className ="text-black  text-3xl ml-1 hover:text-[#61dbfb]">React.</Link>
         </div>
       
          <ul className="flex items-center">
            <li className="mr-4 text-black hover:text-[#61dbfb] active:text-red-500 font-medium hover:border-b-black hover:border-b-[1px] ease-linear duration-300"><Link to="/">Home</Link></li>
            <li className="mr-4 text-black hover:text-[#61dbfb] active:text-red-500 font-medium hover:border-b-black hover:border-b-[1px] ease-linear duration-300"><Link to="/Services">Services</Link></li>
            <li className="mr-4 text-black hover:text-[#61dbfb] active:text-red-500 font-medium hover:border-b-black hover:border-b-[1px] ease-linear duration-300"><Link to="/About">About</Link></li>
            <li className="mr-4 text-black hover:text-[#61dbfb] active:text-red-500 font-medium hover:border-b-black hover:border-b-[1px] ease-linear duration-300"><Link to="/Contact">Contact</Link></li>
          </ul> 
          
        </div>

      </nav>

    </div>
  )
}

export default Nav