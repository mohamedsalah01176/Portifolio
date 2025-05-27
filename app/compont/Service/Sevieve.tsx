import React from 'react'
import CodeIcon from '@mui/icons-material/Code';
// import AOS from 'aos';
import "aos/dist/aos.css"


export default function Sevieve() {
  return (
    <div className='bg-[#121121] text-white p-5'>
        <div className='w-10/12 mx-auto text-center'>
            <h1 className='uppercase text-4xl font-semibold' data-aos="fade-down">my <span className='text-yellow-500'>services</span></h1>
            <div className='flex flex-wrap'>
              <div  className='bg-red-700 p-4 w-[290px] md:w-[400px] mx-auto mt-10  mb-16transform hover:rotate-2 hover:scale-105 transition-all duration-500 rounded-lg' data-aos="fade-right">
                  <CodeIcon className='text-8xl font-semibold' />
                  <h1 className='text-3xl font-semibold'>Front End</h1>
                  <p className='text-md text-lg font-light text-slate-400 my-3 '>I do project of front end is respose, fast, i use some tools to help me in project, projects are bueatiful , orginazed, i have some of experince in front end field ,i strive to produce the best thing.. </p>
              </div>
              <div  className='bg-yellow-700 p-4 w-[290px] md:w-[400px] mx-auto mt-10  mb-16transform hover:rotate-2 hover:scale-105 transition-all duration-500 rounded-lg' data-aos="fade-left">
                  <CodeIcon className='text-8xl font-semibold' />
                  <h1 className='text-3xl font-semibold'>Back End </h1>
                  <p className='text-md text-lg font-light text-slate-400 my-3 '>
                    I develop robust and scalable back-end systems that power dynamic web applications. My experience includes working with databases, APIs, and server-side logic to ensure performance, security, and reliability.
                  </p>
              </div>
            </div>
        </div>
    </div>
  )
}
