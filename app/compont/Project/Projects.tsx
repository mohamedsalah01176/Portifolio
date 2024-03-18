"use client"
import Data from '@/app/ApiProjects/ApiProjects'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import "aos/dist/aos.css"
interface data{
    title:string,
    ImagUrl:string,
    web:string,
    category:string,
}

export default function Project() {
    const[datafilter,setDatafilter]=useState<data[]>(Data) 
    // const[title,setTitle]=useState<string>([]) 

    function filter(title:string){
        let items:data[]=Data.filter(item=> item.category === title)
        setDatafilter(items)
    }
  return (
    <div className='bg-[#02050a] py-5  '>
        <div className='w-10/12 mx-auto' >
            <h1 className='text-yellow-500 text-5xl font-semibold text-center my-8'  data-aos="fade-up">My Projects</h1>
            <div className='text-white text-center mb-6 grid grid-cols-2 sm:grid-cols-4 gap-4'  data-aos="zoom-in">
                <span onClick={()=>setDatafilter(Data)} className=' py-2 px-5 rounded-lg bg-sky-500 cursor-pointer hover:bg-sky-600 transition-all duration-300'>ALL</span>
                <span onClick={()=>filter("reactjs")} className=' py-2 px-5 rounded-lg bg-sky-500 cursor-pointer hover:bg-sky-600 transition-all duration-300'>ReactJS</span>
                <span onClick={()=>filter("nextjs")} className=' py-2 px-5 rounded-lg bg-sky-500 cursor-pointer hover:bg-sky-600 transition-all duration-300'>NextJS</span>
                <span onClick={()=>filter("javascript")} className=' py-2 px-5 rounded-lg bg-sky-500 cursor-pointer hover:bg-sky-600 transition-all duration-300'>javascript</span>
            </div>
            <div className='grid grid-cols-1  sm:grid-cols-2  lg:grid-cols-3 gap-14 transition-all duration-500 ' >
                {datafilter.map((item,index)=>{
                    return(
                        <div id='projects' key={index} className='w-[300px] bg-[#0b1528] p-3 mx-auto    shadow-lg shadow-blue-700 ' data-aos="zoom-out">
                            <div className=''>
                                <Image src={item.ImagUrl} className='mx-auto' alt='' width={280} height={150}/>
                                <div className='flex justify-between my-3 items-center'>
                                    <h1 className='text-white'>{item.title}</h1>
                                    <a href={item.web} target="_blank" className='bg-sky-600 py-2 px-5 rounded-lg hover:bg-sky-500 transition-all duration-300 '> Veiw Website</a>
                                </div>
                            </div>
                        </div>

                    )
                })}
            </div>
        </div>
    </div>
  )
}
