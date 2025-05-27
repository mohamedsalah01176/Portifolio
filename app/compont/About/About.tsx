"use client"
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect } from 'react'
import DownloadIcon from '@mui/icons-material/Download';
import AOS from 'aos';
import "aos/dist/aos.css"
import { handleDownload } from '../until/globalFunction';


export default function About() {
    useEffect( ()=>{
        AOS.init({
            duration: 2000,
          });
    },[])

  return (
    <div className='bg-[#121121] min-h-[50vh] text-white z-[1000] py-11' id="about">
        <div className='w-10/12 mx-auto flex flex-col  md:flex-row-reverse justify-between items-center gap-11  '>
            <div className='basis-8/12'  data-aos="fade-left">
                <h2 className='text-xl font-medium'>About Me</h2>
                <h1 className='text-4xl text-yellow-500 font-semibold my-5'>Front End | Back End</h1>
                <div className='flex justify-between gap-4 items-center'>
                    <div className='hidden md:block w-[200px] h-[3px] bg-slate-400  left-0 top-1/2'></div>
                    <p className='text-slate-600 text-lg'>
                        I have developed several 
                        responsive web pages using HTML, CSS, JavaScript, React.js, Angular, and Next.js, with strong skills in 
                        translating Figma designs into clean, pixel-perfect user interfaces.
                        , I have a solid background in back-end development using Node.js, which 
                        gives me a well-rounded understanding of full-stack web applications.
                    </p>
                </div>
                    <div className="mt-11 flex ">
                        <Link href={'/'} className='py-3 px-5 mr-4 bg-[#55ae6a] transition-all duration-300 hover:bg-[#55e6a5]  ' onClick={()=>handleDownload()}>DOWNLOAD CV <DownloadIcon/></Link>
                    </div>
            </div>
            <div className='basis-3/12 relative '  data-aos="fade-up">
                <Image className='relative z-20 w-100 h-100 object-contain' src={'/personal/Personal_Image3.jpg'} alt='about' width={300} height={300} />
                <div className='absolute -top-3 -right-3 w-full h-full  bg-[#55e6a5] z-10 shadow-2xl shadow-yellow-400'></div>
            </div>
        </div>
    </div>
  )
}
