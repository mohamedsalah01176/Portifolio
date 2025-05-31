"use client"
import React, { useEffect } from 'react'
import SklillesItem from './SklillesItem'
import "aos/dist/aos.css"

export default function Skills() {

  return (
    <div className='bg-[#11101e] text-white py-10 overflow-hidden' >
      <div className='w-10/12 mx-auto'>
        <h1 className='uppercase text-yellow-500 text-5xl font-semibold text-center' data-aos="fade-up">Skills</h1>
        <h1  className='mt-10 mb-5 text-2xl font-semibold ' data-aos="fade-up" >Front End</h1>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-x-5 gap-y-3' >
          <div className='flex  gap-2 flex-col' >
            <SklillesItem state="down" title={"HTML"} level={"95%" }  />
            <SklillesItem state="right" title={"CSS"} level={"85%" }  />
            <SklillesItem state="right" title={"JAVASCRIPT"} level={"90%" } />
            <SklillesItem state="right" title={"Typecscript"} level={" 90%" } />
            <SklillesItem state="right" title={"Tailwind"} level={"95%" } />
            <SklillesItem state="up" title={"Material UI"} level={"95%" } />
          </div>
          <div className='flex  gap-2 flex-col' >
            <SklillesItem state="down" title={"SASS"} level={"90%" } />
            <SklillesItem state="left" title={"Bootstrap"} level={"80%" } />
            <SklillesItem state="left" title={"React JS"} level={"95%" } />
            <SklillesItem state="left" title={"Angulat TS"} level={"95%" } />
            <SklillesItem state="left" title={"Next JS"} level={"95%" } />
            <SklillesItem state="up" title={"Redux Toolkit"} level={"95%" } />
          </div>
        </div>
        <h1 className='mt-10 mb-5 text-2xl font-semibold ' data-aos="fade-up">Back End</h1>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-x-5 gap-y-3'>
          <div className='flex  gap-2 flex-col' data-aos="fade-right">
            <SklillesItem state="down" title={"Node JS"} level={"90%" }/>
            <SklillesItem state="up" title={"Express"} level={"95%" }/>
          </div>
          <div className='flex  gap-2 flex-col' data-aos="fade-left">
            <SklillesItem state="down" title={"Mongo DB"} level={"90%" }/>
            <SklillesItem state="up" title={"Nest JS"} level={"85%" }/>
          </div>
        </div>
        <h1 className='mt-10 mb-5 text-2xl font-semibold ' data-aos="fade-up">Tools</h1>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-x-5 gap-y-3'>
          <div className='flex  gap-2 flex-col' data-aos="fade-right">
            <SklillesItem state="down" title={"Git"} level={"90%" }/>
            <SklillesItem state="up" title={"Postman"} level={"95%" }/>
          </div>
          <div className='flex  gap-2 flex-col' data-aos="fade-left">
            <SklillesItem state="down" title={"Scurm"} level={"80%" }/>
          </div>
        </div>
        <h1 className='mt-10 mb-5 text-2xl font-semibold ' data-aos="fade-up">Other</h1>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-x-5 gap-y-3'>
          <div className='flex  gap-2 flex-col' data-aos="fade-right">
            <SklillesItem state="down" title={"Data Structure"} level={"80%" }/>
            <SklillesItem state="up" title={"C"} level={"80%" }/>
          </div>
          <div className='flex  gap-2 flex-col' data-aos="fade-left">
            <SklillesItem state="down" title={"C++"} level={"90%" }/>
          </div>
        </div>
      </div>
    </div>
  )
}
