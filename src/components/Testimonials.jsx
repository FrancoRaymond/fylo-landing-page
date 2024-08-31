import React from 'react'
import '../index.css'
import quotes from '../assets/images/bg-quotes.png'
import { Testimonies } from '../Data.js'

const Testimonials = () => {

  return (
    <div className='pt-10 pb-72 px-4 lg:px-28 lg:pt-20 '>
        <img src={quotes} alt="quotes icon" className='-mb-2'/>
        <div className='flex flex-col gap-10 md:grid md:grid-cols-2 lg:grid-cols-3'>
        {Testimonies.map((testimony, index) => (
          <div
            key={testimony.id}
            className={`px-5 py-8 text-white bg-testimonials-bg rounded-md my-auto shadow-xl ${
              index === 2
                ? 'md:col-span-2 md:flex md:flex-col md:max-w-96 md:mx-auto md:justify-center lg:col-span-1 lg:flex lg:flex-col lg:max-w-full lg:mx-0 lg:justify-start'
                : ''
            }`}>
            <p className='text-left'>{testimony.message}</p>
            <div className='flex gap-5 mt-7 align-middle'>
              <img
                src={testimony.icon}
                alt="profile icon"
                className='h-11 w-11 rounded-full'
              />
              <div className='text-left m-0 p-0'>
                <h4 className='font-bold text-xl m-0 p-0'>{testimony.name}</h4>
                <p className='font-light text-sm m-0 p-0'>{testimony.position}</p>
              </div>
            </div>
          </div>
        ))}
</div>

    </div>     
  )
}

export default Testimonials 