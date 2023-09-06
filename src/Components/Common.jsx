import React from 'react';
import Image from '../assets/Images/image1.svg';
const Common= () => {
  return (
    <div className=''>
    
    <section className='max-w-[1280px] grid items-center content-center grid-cols-2 mx-auto'>
      <div className='p-2 '>
        <h1 className='lg:text-5xl md:4xl text-3xl '>Grow your bussines with <span className='text-[#61dbfb] font-medium '>React Framework</span></h1>
        <h2 className='mt-5 text-xm lg:text-2xl md:xl '>We are the team of talented developer making websites</h2>
        <button className="bg-white border rounded-full border-[#61dbfb] py-2 px-8 mt-5 text-[#61dbfb] hover:bg-[#61dbfb] hover:text-white ease-linear duration-150" >GetStarted</button>
      </div>
      
      <div className=''>
        <img src={Image} className='animate-Bounce  '/>
      </div>
    </section>
    
    </div>
  )
}

export default Common