import React from 'react'
import '../index.css'
import MobileBG from '../assets/images/illustration-intro.png'


const Hero = () => {


  return (
    <div className='pb-14 text-white pt-20 px-4 md:px-10 lg:px-72 bg-intro-email-bg relative'>
        <img src={MobileBG} alt="mobil" className='mx-auto ' />

        <div className='pt-10'>
            <h1 className='text-2xl font-bold mt-8 lg:text-4xl'>
                All your files in one secure location, accessible anywhere.
            </h1>
            <p className='mt-8'>Fylo stores all your most important files in one secure location. Access them wherever 
                you need, share and collaborate with friends family, and co-workers.
            </p>
            <button className='my-8 bg-blue-400 px-16 py-3 rounded-3xl font-bold hover:bg-blue-300'>Get started</button>
        </div>
    </div>
  )
}

export default Hero