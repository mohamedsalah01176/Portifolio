"use client"
import React, { useEffect } from 'react'
import SklillesItem from './SklillesItem'
// import AOS from 'aos';
import "aos/dist/aos.css"

export default function Skills() {
//   useEffect( ()=>{
//     AOS.init({
//         duration: 2000,
//       });
// },[])
  return (
    <div className='bg-[#121121] text-white py-10 overflow-hidden' >
      <div className='w-10/12 mx-auto'>
        <h1 className='uppercase text-yellow-500 text-5xl font-semibold text-center' data-aos="fade-up">Skills</h1>
        <h1  className='my-5 text-2xl font-semibold ' data-aos="fade-up" >Language</h1>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-x-5 gap-y-3' >
          <div className='flex  gap-2 flex-col' data-aos="fade-right">
            <SklillesItem title={"HTML"} level={"95%" } />
            <SklillesItem title={"CSS"} level={"98%" } />
            <SklillesItem title={"JAVASCRIPT"} level={"90%" }/>
          </div>
          <div className='flex  gap-2 flex-col' data-aos="fade-left">
            <SklillesItem title={"C++"} level={"85%" }/>
            <SklillesItem title={"PYTHON"} level={"85%" }/>
            <SklillesItem title={"TYPESCRIPT"} level={"90%" }/>
          </div>
        </div>
        <h1 className='my-5 text-2xl font-semibold ' data-aos="fade-up">Fremeworks&Librarys</h1>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-x-5 gap-y-3'>
          <div className='flex  gap-2 flex-col' data-aos="fade-right">
            <SklillesItem title={"JQUERY"} level={"80%" }/>
            <SklillesItem title={"SASS"} level={"90%" }/>
            <SklillesItem title={"BOOTSTRAP"} level={"95%" }/>
            <SklillesItem title={"Redux Toolkit"} level={"95%" }/>
          </div>
          <div className='flex  gap-2 flex-col' data-aos="fade-left">
            <SklillesItem title={"TAILWIND"} level={"90%" }/>
            <SklillesItem title={"React JS"} level={"95%" }/>
            <SklillesItem title={"NEXT JS"} level={"95%" }/>
          </div>
        </div>
      </div>
    </div>
  )
}
