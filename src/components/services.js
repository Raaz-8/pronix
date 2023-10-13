import React from 'react'
import Servicecard from './servicecard'
import { Link } from 'react-router-dom'
// import App from './servicecard'

const Services = () => {
  return (
    
    <div id='services' className='flex flex-col items-center h-auto bg-white  max-sm:mt-20  max-sm:overflow-auto overflow-auto max-sm:h-auto'>
        <div className='text-amber-700 text-4xl font-bold mt-6 '><h1>Our Services</h1>
        </div>

        <Servicecard/>
        
    </div>
  
  )
}

export default Services