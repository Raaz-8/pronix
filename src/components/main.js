import React from 'react'

const Main = () => {
  return (
 
    <section id='home'>
      
        <div className='bg bg-amber-700 -z-50 h-auto'>
            <img className=' opacity-20 z-0 bg-cover max-sm:bg-contain max-sm:h-screen' alt='BG' src='https://images.unsplash.com/photo-1580894894513-541e068a3e2b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80'/>
        </div>
        <div className='flex z-0 justify-center flex-col items-center '>
                <h1 className='text-white text-4xl mt-16 max-sm:text-xl  max-sm:mt-24'>Your destination for <strong>IT SERVICES</strong></h1>
                <br/>
                <span className='brand-name mt-10 text-7xl flex flex-col items-center justify-center max-sm:my-12 max-sm:text-5xl'><h1>ProNix</h1><h1 className='mt-6  max-sm:my-2'>Solutions</h1></span>
                <p className='mb-36 mt-16 text-white text-sm w-8/12 text-center'>Welcome to ProNix Solutions, <br/> where innovation meets technology. We are a dynamic <strong>IT solutions</strong> provider dedicated to helping businesses thrive in the digital age. <br/> With a passion for creativity and a commitment to excellence, we bring a diverse set of skills to the table, <br/> offering a <strong>wide range of services</strong> tailored to your needs.</p>
        </div>
        
        
    </section>

  )
}

export default Main