import React from 'react'
// import logo from '../assets/pronix-logo.png'
import { Link } from 'react-router-dom'
import Services from './services'
import Testimonials from './testimonials'
import Footer from './footer'
const Main = () => {
  return (
 
    <div id='home'>
      
        <div className='bg bg-amber-700 -z-50 h-auto'>
            <img className=' opacity-20 z-0 bg-cover max-sm:bg-contain max-sm:h-screen' alt='BG' src='https://images.unsplash.com/photo-1580894894513-541e068a3e2b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80'/>
        </div>
        <div className='flex z-0 justify-center flex-col items-center '>
                <h1 className='text-white text-4xl mt-36 max-sm:text-xl  max-sm:mt-28'>Your destination for <strong>IT SERVICES</strong></h1>
                <br/>
                <span className='brand-name mt-10 text-7xl flex flex-col items-center justify-center max-sm:my-12 max-sm:text-5xl'><h1>ProNix</h1><h1 className='mt-6 mb-44 max-sm:my-2'>SOLUTIONS</h1></span>
        </div>
        
        
    </div>

  )
}

export default Main