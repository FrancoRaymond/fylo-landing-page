import React from 'react'
import '../index.css'
import { Features } from '../Data.js'

const Benefits = () => {

  return (
    <div className=" gap-8 pt-20 pb-10 px-4 md:grid md:grid-cols-2 md:px-10 lg:px-48 lg:pt-28">
      {Features.map((feature) => (
        <div key={feature.id} className="flex flex-col justify-center text-white align-middle mb-20">
          <img src={feature.icon}  className='h-16 w-18 mx-auto'/>
          <h3 className='text-xl font-bold mt-8'>{feature.heading}</h3>
          <p className='mt-4'>{feature.description}</p>
        </div>
      ))}
    </div>    
  )
}

export default Benefits