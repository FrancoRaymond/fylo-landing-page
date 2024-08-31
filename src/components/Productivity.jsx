import React from 'react'
import '../index.css'
import productivityMockup from '../assets/images/illustration-stay-productive.png'
import fowardArrow from '../assets/images/icon-arrow.svg'




const Productivity = () => {

  return (
    <div className="text-white pb-10 px-4 md:px-10 lg:px-28 md:flex md:items-center">
        <img src={productivityMockup} alt="" className='md:h-72 lg:h-96'/>
        <div className='md:ml-7 flex flex-col h-fit'>
            <h3 className='mt-16 text-xl font-bold md:mt-0 md:text-left md:text-2xl'>Stay productive, wherever you are</h3>
            <div className='mt-8 md:mt-3 text-left'>
                <p>Never let location be an issue when accessing your files. Fylo has you covered for all of your file 
                    storage needs. 
                </p>
                <p className='mt-7 md:mt-3'>Securely share files and folders with friends, family and colleagues for live collaboration. No email 
                    attachments required.
                </p>
            </div>
            <span className='cursor-pointer text-cyan-cta mt-7 md:mt-3 flex gap-3 align-middle pb-2 border-b border-cyan-cta w-fit font-semibold'>
                <p className='m-0 p-0'>See how Fylo works</p>
                <img src={fowardArrow} alt="arrow icon" className='h-7 w-7 m-0 p-0' />
            </span>
        </div>  
    </div>       
  )
}

export default Productivity 