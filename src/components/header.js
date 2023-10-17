import React from 'react'
import logo from '../assets/pronix-logo.png'

const Header = () => {
  return (
    <header>
        
        <div className='header z-100 max-sm:px-3'>
        
            <div>
                <a href='/'><img className='logo hover:-translate-y-1 max-md:w-12 max-sm:w-10' alt="Pronix" src={logo} /></a>
            </div>
            <div className='tags text-amber-800 text-lg w-3/5 max-md:text-sm max-md:w-3/5 max-sm:text-xs max-sm:w-3/5 '>
                <h1 className='hover:-translate-y-1 cursor-pointer'><a href='#'>Home</a></h1>
                <h1 className='hover:-translate-y-1 cursor-pointer'><a href='#services'>Services</a></h1>
                <h1 className='hover:-translate-y-1 cursor-pointer'><a href='#about'>About</a></h1>
                <h1 className='hover:-translate-y-1 cursor-pointer'><a href='#contact'>Contact</a></h1>
            </div>
        </div>
        
    </header>
  )
}

export default Header