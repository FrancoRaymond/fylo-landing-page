import React from 'react'
import '../index.css'
import logo from '../assets/images/logo.svg'

const Navbar = () => {

  return (
    <>
     <div className='flex py-4 w-full justify-between px-4 md:px-10 lg:px-28 lg:py-7 bg-intro-email-bg'>
        <img src={logo} alt="logo" className='w-22 h-6 sm:w-32 sm:h-10'/>
        <nav className='flex gap-6 align-middle text-gray-300 m-0 p-0 lg:gap-11'>
           <a href="" className="hover:text-white hover:underline hover:font-semibold transition duration-300 ease-in-out">Features</a>
           <a href="" className="hover:text-white hover:underline hover:font-semibold transition duration-300 ease-in-out">Team</a>
           <a href="" className="hover:text-white hover:underline hover:font-semibold transition duration-300 ease-in-out">Sign in</a>
        </nav>
     </div>
    </>
  )
}

export default Navbar